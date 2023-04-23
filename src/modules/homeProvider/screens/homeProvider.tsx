import { Star } from "@styled-icons/boxicons-solid";
import {
  useCreateService,
  useListService,
  useUpdateService,
  useDeleteService,
} from "@/services/services";
import { formatToBRL, formatToDateTime } from "brazilian-values";
import { useCreateId } from "@/stores/useId";
import { useListRequest, useUpdateRequest } from "@/services/requests";
import { queryClient } from "@/libs/react-query";
import { keyListRequest } from "@/services/requests/keys";
import { useState } from "react";
import { ServiceModel } from "@/entities/ServiceModel";
import { useForm } from "react-hook-form";
import { keyListService } from "@/services/services/keys";

export default function HomeProviderScreen() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ServiceModel>({
    defaultValues: { name: "", description: "", price: 0, _id: "" },
  });

  const providerId = useCreateId((state) => state.data.id);
  const services = useListService();
  const servicesFiltered = services.data?.filter(
    (service) => service.providerId === providerId
  );
  const requests = useListRequest();
  const [showAddService, setShowAddService] = useState(false);
  const [serviceUpdate, setServiceUpdate] = useState(false);
  const requestsFiltered = requests.data?.filter((request) =>
    servicesFiltered?.map((service) => service._id).includes(request.serviceId)
  );

  const sortedRequests = requestsFiltered?.sort((a, b) => {
    const statusOrder = ["Pendente", "Aceito", "Recusado"];
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  const { mutate: updateRequest, isLoading: isUpdatingRequest } =
    useUpdateRequest({
      onSuccess: () => {
        queryClient.invalidateQueries(keyListRequest());
        console.log("Atualizado com sucesso");
      },
    });

  const { mutate: createService, isLoading: isCreatingService } =
    useCreateService({
      onSuccess: () => {
        queryClient.invalidateQueries(keyListService());
        console.log("Criado com sucesso");
        setShowAddService(false);
        reset();
      },
    });

  const { mutate: updateService, isLoading: isUpdatingService } =
    useUpdateService({
      onSuccess: () => {
        queryClient.invalidateQueries(keyListService());
        console.log("Atualizado com sucesso");
        setShowAddService(false);
        reset();
      },
    });

  const { mutate: deleteService, isLoading: isDeletingService } =
    useDeleteService({
      onSuccess: () => {
        queryClient.invalidateQueries(keyListService());
        console.log("Deletado com sucesso");
      },
    });

  const editService = (service: ServiceModel) => {
    setValue("name", service.name);
    setValue("description", service.description);
    setValue("price", service.price);
    setValue("_id", service._id);
    setServiceUpdate(true);
    setShowAddService(true);
  };

  const onSubmit = (data: ServiceModel) => {
    if (serviceUpdate) {
      const request = {
        ...data,
        providerId: providerId,
        _id: serviceUpdate && getValues("_id"),
      };
      updateService(request);
    } else {
      const request = {
        ...data,
        providerId: providerId,
      };
      createService(request);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 ">
        <div className="flex flex-col items-center w-full gap-2 mb-10 max-w-content-wrapper-max">
          <h1 className="md:text-4xl text-2xl  max-w-[800px] font-medium text-center text-[#0E1428] ">
            Seu dashboard
          </h1>
          <p className="text-center text-[#0E1428] text-lg">
            Aqui você pode gerenciar seus serviços e agendamentos
          </p>
          <div className="flex items-end justify-between w-full">
            <h1 className="w-full mt-10 text-2xl text-start">
              Serviços oferecidos:
            </h1>
            <button
              onClick={() => {
                setShowAddService(true);
                setServiceUpdate(false);
              }}
              className="w-40 text-black border rounded-md min-h-10 border-secundary bg-primary"
            >
              Adicionar serviço
            </button>
          </div>
          <div className="items-center justify-center w-full p-4 overflow-x-auto border rounded border-secundary">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Serviço</th>
                  <th className="px-4 py-2">Descrição</th>
                  <th className="px-4 py-2">Preço</th>
                  <th className="px-4 py-2">Avaliação</th>
                  <th className="px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {servicesFiltered?.map((service) => (
                  <tr className="w-full" key={service._id}>
                    <td className="px-4 py-2">{service.name}</td>
                    <td className="px-4 py-2 text-ellipsis">
                      {service?.description}
                    </td>
                    <td className="px-4 py-2">{formatToBRL(service.price)}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Star size={20} />
                        <span>4.5</span>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => editService(service)}
                          className="px-4 py-2 text-black border rounded-md border-secundary bg-primary"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteService(service)}
                          className="px-4 py-2 text-white bg-red-500 rounded-md"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-end justify-between w-full">
            <h1 className="w-full mt-10 text-2xl text-start">
              Serviços feitos:
            </h1>
          </div>
          <div className="items-center justify-center w-full p-4 overflow-x-auto border rounded border-secundary">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Pedido Id</th>
                  <th className="px-4 py-2">Serviço</th>
                  <th className="px-4 py-2">Data</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {sortedRequests?.map((request) => (
                  <tr className="w-full" key={request._id}>
                    <td className="px-4 py-2">
                      {(request?._id as string).slice(-5)}
                    </td>
                    <td className="px-4 py-2">
                      {
                        services.data?.find((s) => s._id === request.serviceId)
                          ?.name
                      }
                    </td>
                    <td className="px-4 py-2 text-ellipsis">
                      {formatToDateTime(new Date(request?.date))}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span>
                          {isUpdatingRequest ? "Atualizando" : request?.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (request?.status === "Pendente") {
                              updateRequest({
                                _id: request._id,
                                status: "Aceito",
                                consumerId: request.consumerId,
                                date: request.date,
                                serviceId: request.serviceId,
                              });
                            }
                          }}
                          className={`px-4 py-2 text-black border rounded-md max-w-[100px] w-full  border-secundary 
                          ${
                            request?.status === "Pendente"
                              ? "bg-green-500"
                              : "bg-gray-500 opacity-50 cursor-default"
                          }`}
                        >
                          {request?.status === "Pendente"
                            ? "Aceitar"
                            : request?.status === "Aceito"
                            ? "Aceito"
                            : "Recusado"}
                        </button>
                        <button
                          onClick={() => {
                            if (request?.status === "Pendente") {
                              updateRequest({
                                _id: request._id,
                                status: "Recusado",
                                consumerId: request.consumerId,
                                date: request.date,
                                serviceId: request.serviceId,
                              });
                            }
                          }}
                          className="px-4 py-2 text-white bg-red-500 rounded-md"
                        >
                          Cancelar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAddService && (
        <>
          <div
            onClick={() => {
              setShowAddService(false);
              reset();
            }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black bg-opacity-50"
          ></div>

          <div className="flex fixed inset-0 z-[80] max-h-[500px] justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center w-full p-6 bg-white rounded-md max-w-content-wrapper-max">
            <h1 className="text-2xl font-medium">Adicionar serviço</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-4 mt-4"
            >
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md border-secundary"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  className="w-full p-2 border rounded-md border-secundary"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="price">Preço</label>
                <input
                  type="number"
                  id="price"
                  className="w-full p-2 border rounded-md border-secundary"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="flex items-center justify-end w-full gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddService(false);
                    reset();
                  }}
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isCreatingService}
                  className="px-4 py-2 text-white bg-green-500 rounded-md"
                >
                  {isCreatingService || isUpdatingService
                    ? "Criando"
                    : "Adicionar"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

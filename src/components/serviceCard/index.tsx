import Image from "next/image";
import { CardModalContainer } from "./styles";
import { Close } from "@styled-icons/ionicons-solid";
import { ServiceModel } from "@/entities/ServiceModel";
import { RequestModel } from "@/entities/Requests";
import { useForm } from "react-hook-form";
import { useCreateRequest } from "@/services/requests";
import { keyListRequest } from "@/services/requests/keys";
import { queryClient } from "@/libs/react-query";
import { useCreateId } from "@/stores/useId";

type Props = {
  data: ServiceModel;
  setShowModal: (value: boolean) => void;
};

const ServiceCard = ({ setShowModal, data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestModel>({
    defaultValues: {},
  });

  const consumerId = useCreateId((state) => state.data.id);

  const { mutate, isLoading } = useCreateRequest({
    onSuccess: async (res) => {
      // await queryClient.invalidateQueries(keyCurrentCostumer());
      await queryClient.invalidateQueries(keyListRequest());
      setShowModal(false);
    },
    onError: (error: any) => {
      if (error?.response) {
        console.log(error);
      } else {
        console.log(error);
      }
    },
  });

  const onSubmit = (dataForm: RequestModel) => {
    const dataAtual =
      new Date().toISOString().split("T")[0] + "T" + dataForm.date + ":00.000";

    const request = {
      serviceId: data._id,
      status: "Pendente",
      consumerId: consumerId,
      date: dataAtual,
    };

    mutate(request);
  };

  return (
    <CardModalContainer>
      <div className="flex justify-between mb-5 text-2xl">
        <span>{data.name}</span>
        <button
          onClick={() => setShowModal(false)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10"
        >
          <Close size={20} />
        </button>
      </div>
      <div className="relative flex justify-center w-full mb-5">
        {data?.thumbnail && (
          <Image
            src={`data:image/jpg;base64, ${data?.thumbnail}`}
            alt={"serviço icon"}
            width={268}
            height={268}
            objectFit="cover"
            className="rounded-md min-w-[468px] min-h-[468px]"
          />
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center ">
          <div className="self-start">{data?.description}</div>
          <div className="flex flex-col w-full mt-5">
            <span className="">Selecione um horário</span>
            <select
              className="w-full max-h-[62px] rounded-md text-base duration-300 p-5 border-[2px] border-solid focus-visible:outline-none "
              {...register("date", { required: true })}
            >
              <option disabled value="">
                Selecione um horário
              </option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
            </select>
          </div>

          <div className="flex items-end justify-end w-full h-full">
            <button
              disabled={isLoading}
              className="px-4 py-2 mt-4 text-black bg-yellow-500 border rounded-md disabled:opacity-50 border-secundary "
            >
              {isLoading ? "Agendando" : "Agendar"}
            </button>
          </div>
        </div>
      </form>
    </CardModalContainer>
  );
};

export default ServiceCard;

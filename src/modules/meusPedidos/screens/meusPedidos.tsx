import { formatToBRL, formatToDate, formatToDateTime } from "brazilian-values";
import Image from "next/image";

import { useGetCostumer } from "@/services/consumers";
import { queryClient } from "@/libs/react-query";
import { useListRequest } from "@/services/requests";
import { RequestModel } from "@/entities/Requests";
import { useListService } from "@/services/services";
import { useCreateId } from "@/stores/useId";
import { keyListRequest } from "@/services/requests/keys";
import { Circle } from "@styled-icons/boxicons-solid";

export default function MeusPedidosScreen() {
  const userId = useCreateId((state) => state.data.id);

  const consumer = useGetCostumer(userId);
  const allRequests = useListRequest();

  setTimeout(() => {
    queryClient.invalidateQueries(keyListRequest());
  }, 500);

  const history = allRequests.data?.filter(
    (request: RequestModel) =>
      request.consumerId === userId &&
      (request.status === "Aceito" || request.status === "Recusado")
  );
  const pendentes = allRequests.data?.filter(
    (request: RequestModel) =>
      request.consumerId === userId && request.status === "Pendente"
  );

  const services = useListService();

  return (
    <>
      <div className="flex bg-[#F5F5F5] justify-center items-center px-6 !py-10 pt-7">
        <div className="flex items-center justify-start w-full h-full max-w-content-wrapper-max">
          <div className="flex flex-col gap-2 min-h-[170px]  w-full justify-between p-6 shadow-lg bg-white rounded-md border border-[#F4EFEA]">
            <h2 className="text-xl font-medium opacity-80">
              Pedidos pendentes:
            </h2>
            {pendentes?.map((item) => (
              <div
                key={item._id}
                className="flex  justify-between gap-2 mt-5 min-h-[150px] w-full hover:bg-black/5 duration-200 p-4 rounded-md border-2 border-[#F4EFEA]"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center font-medium gap-2 ${
                        item?.status === "Pendente"
                          ? "text-[#ffc413]"
                          : "text-green-500"
                      }`}
                    >
                      <Circle size={12} />
                      {item?.status}
                    </span>
                    <span className="text-xl font-medium opacity-80">
                      {
                        services.data?.find((s) => s._id === item.serviceId)
                          ?.name
                      }
                    </span>
                  </div>

                  <span className="opacity-80">
                    {
                      services.data?.find((s) => s._id === item.serviceId)
                        ?.description
                    }
                  </span>
                  <div className="flex flex-col">
                    <span className="opacity-80">
                      {formatToDate(new Date(item?.date))}
                    </span>
                    <span className="opacity-80">
                      {formatToDateTime(new Date(item?.date))?.slice(-5)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md w-[35px] h-[25px]">
                      <Image
                        src={"/assets/images/mastercard.png"}
                        width={35}
                        height={25}
                        alt="Logo Credit Card"
                        className="flex rounded-md"
                        objectFit="contain"
                      />
                      <span className="opacity-80">crédito</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end opacity-80">
                    <span>MasterCard</span>
                    <span className="font-medium">
                      {consumer.data?.creditCard?.code.slice(-4)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-medium opacity-80">
                      {formatToBRL(
                        services.data?.find((s) => s._id === item.serviceId)
                          ?.price as number
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {!pendentes?.length && (
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-xl font-medium opacity-80">
                  Nenhum pedido pendente
                </span>
                <span className="opacity-80">
                  Você não possui nenhum pedido pendente
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 my-10 bg-white">
        <div className="flex flex-col items-start w-full max-w-content-wrapper-max">
          <h1 className="text-xl font-medium opacity-80">Histórico</h1>

          <div className="w-full">
            {history?.map((item) => (
              <div
                key={item._id}
                className="flex  justify-between gap-2 mt-5 min-h-[150px] w-full hover:bg-black/5 duration-200 p-4 rounded-md border-2 border-[#F4EFEA]"
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`flex items-center font-medium gap-2 ${
                      item?.status === "Recusado"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    <Circle size={12} />
                    {item?.status}
                  </span>
                  <span className="text-xl font-medium opacity-80">
                    {services.data?.find((s) => s._id === item.serviceId)?.name}
                  </span>
                  <span className="opacity-80">
                    {
                      services.data?.find((s) => s._id === item.serviceId)
                        ?.description
                    }
                  </span>
                  <div className="flex flex-col">
                    <span className="opacity-80">
                      {formatToDate(new Date(item?.date))}
                    </span>
                    <span className="opacity-80">
                      {formatToDateTime(new Date(item?.date))?.slice(-5)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md w-[35px] h-[25px]">
                      <Image
                        src={"/assets/images/mastercard.png"}
                        width={35}
                        height={25}
                        alt="Logo Credit Card"
                        className="flex rounded-md"
                        objectFit="contain"
                      />
                    </div>
                    <span className="opacity-80">crédito</span>
                  </div>

                  <div className="flex flex-col items-end opacity-80">
                    <span>MasterCard</span>
                    <span className="font-medium">
                      {consumer.data?.creditCard?.code.slice(-4)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-medium opacity-80">
                      {formatToBRL(
                        services.data?.find((s) => s._id === item.serviceId)
                          ?.price as number
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {!history?.length && (
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-xl font-medium opacity-80">
                  Nenhum pedido realizado
                </span>
                <span className="opacity-80">
                  Você não possui nenhum pedido realizado
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

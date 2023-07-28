import Image from "next/image";
import { Verified } from "@styled-icons/material";
import BestWorkers from "../components/bestWorkers";
import { Star } from "@styled-icons/boxicons-solid";
import { useListService } from "@/services/services";
import { useListProvider } from "@/services/providers";
import { GuideDog } from "@styled-icons/foundation";
import { formatToBRL } from "brazilian-values";
import ServiceCard from "@/components/serviceCard";
import { useState } from "react";
import { ServiceModel } from "@/entities/ServiceModel";
import { useCreateId } from "@/stores/useId";
import NeedLogin from "@/components/notLogin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function HomeScreen() {
  const dataServices = useListService();
  const dataProvider = useListProvider();
  const [showModalService, setShowModalService] = useState(false);
  const [serviceData, setServiceData] = useState<ServiceModel>();
  const [showNeedLogin, setShowNeedLogin] = useState(false);
  const consumerId = useCreateId((state) => state.data.id);

  const openServiceModal = (data: ServiceModel) => {
    if (!consumerId) {
      setShowNeedLogin(true);
      return;
    }
    setServiceData(data);
    setShowModalService(true);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full px-6 py-4 md:py-7">
        <h1 className=" text-3xl md:text-[2.5rem] my-6 max-w-[650px] py-4 font-Oswald font-medium text-center text-[#0E1428] uppercase">
          Encontre os melhores profissionais para seus animais
        </h1>
        <div className="w-full max-w-content-wrapper-max">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Pagination, Navigation, Keyboard, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="h-[400px] w-full flex justify-center items-center ">
                <Image
                  src={"/assets/images/heroBackGround.jpg"}
                  alt="dog walker"
                  className=" rounded-l-md"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[400px] w-full flex justify-center items-center ">
                <Image
                  src={"/assets/images/banho.jpg"}
                  alt="dog walker"
                  className=" rounded-l-md"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[400px] w-full flex justify-center items-center ">
                <Image
                  src={"/assets/images/loginPic.jpg"}
                  alt="dog walker"
                  className=" rounded-l-md"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[400px] w-full flex justify-center items-center ">
                ANÚNCIOS AQUI
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 ">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="md:text-4xl text-2xl  max-w-[800px] font-medium text-center mt-6 text-[#0E1428] ">
            Escolha a opção que deseja
          </h1>
          <span className="md:text-lg">
            Não encontrou o que queria?{" "}
            <Link href={"/explore"} passHref>
              <a>clique aqui.</a>
            </Link>
          </span>
        </div>
        <div className="flex justify-center w-full px-6">
          <div className="w-full max-w-content-wrapper-max">
            <div className="grid gap-5 mb-10 xl:grid-cols-auto-1818px md:grid-cols-auto-768px grid-cols-auto-repeat justify-items-center">
              {dataServices?.isFetched &&
                dataServices?.data?.map((item, idx) => {
                  if (idx < 12) {
                    return (
                      <div
                        key={item._id}
                        onClick={() => {
                          openServiceModal(item);
                        }}
                        className="flex w-full duration-300 bg-white rounded-md ease-linear min-h-[130px] max-h-[140px] cursor-pointer hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,.4)]"
                      >
                        <div className="flex rounded-l-md min-w-[130px] justify-center">
                          {item?.thumbnail ? (
                            <Image
                              src={`data:image/jpg;base64, ${item?.thumbnail}`}
                              alt="dog walker"
                              className="min-h-[130px] rounded-l-md"
                              width={140}
                              height={140}
                              objectFit="cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <div className="min-w-full min-h-full bg-gray-400 opacity-50 rounded-l-md" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col justify-between w-full p-4 text-start">
                          <div>
                            <p className="text-lg font-medium">{item.name}</p>
                            <p className="text-sm text-ellipsis ">
                              {item?.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-secundary">
                                {formatToBRL(item?.price)}
                              </span>
                            </div>
                            <div className="flex items-end gap-1 text-amber-500">
                              <Star className="w-4 h-4 text-amber-500" />
                              <span className="font-sans text-xs font-medium">
                                ...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              {(dataServices?.isLoading || !!dataProvider?.error) &&
                Array.from({ length: 12 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex w-full duration-300 bg-white animate-pulse rounded-md ease-linear min-h-[130px] max-h-[140px] cursor-pointer hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,.4)]"
                  >
                    <div className="flex rounded-l-md min-w-[130px] justify-center">
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="min-w-full min-h-full bg-gray-400 rounded-l-md" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between w-full p-4 text-start">
                      <div>
                        <p className="w-full h-4 mb-2 text-lg font-medium bg-gray-400 rounded-md " />
                        <div className="flex flex-col gap-1">
                          <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                          <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                          <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div>
                          <p className="w-[65px] h-4 bg-gray-400   rounded-md" />
                        </div>
                        <div className="flex items-end gap-1 text-amber-500">
                          <Star className="w-4 h-4 text-amber-500 " />
                          <span className="font-sans text-xs font-medium">
                            ...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E1428] flex flex-col items-center pb-32 px-6">
        <div className="w-full max-w-content-wrapper-max">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-16 md:flex-row md:items-end mt-28">
            <p className="text-4xl font-medium text-white">Top profissionais</p>
            <Link href={"/explore"} passHref>
              <a className="text-[#CCC6C6] cursor-pointer">ver mais</a>
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-auto-repeat justify-items-center">
            {dataProvider?.isFetched &&
              dataProvider?.data?.map((item, idx) => {
                if (idx < 8) {
                  return <BestWorkers key={item._id} {...item} />;
                }
              })}
            {(dataProvider?.isLoading || !!dataProvider?.error) &&
              Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 animate-pulse border items-center cursor-pointer hover:border-[#7a7977] border-transparent max-w-fit  p-2 rounded-md px-4 hover:shadow-md"
                >
                  <div>
                    <div className="rounded-full h-[90px] w-[90px] bg-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1 text-start">
                    <p className="w-[90px] h-4 bg-gray-400 rounded-md" />
                    <p className="bg-[#7B9E89] h-3 rounded-md" />
                    <p className="w-full h-3 bg-gray-400 rounded-md" />
                  </div>
                  <div className="flex items-center ">
                    <Verified className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center w-full mt-20 max-w-content-wrapper-max">
          <GuideDog className="text-yellow-600 w-60 h-60" />
        </div>
      </div>

      {showModalService && serviceData && (
        <>
          <div
            onClick={() => setShowModalService(false)}
            className="fixed top-0 left-0 z-[80] w-full h-full bg-black bg-opacity-50"
          ></div>
          <ServiceCard setShowModal={setShowModalService} data={serviceData} />
        </>
      )}
      {showNeedLogin && (
        <NeedLogin show={showNeedLogin} onClick={setShowNeedLogin} />
      )}
    </>
  );
}

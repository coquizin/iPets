import Image from "next/image";
import { Star } from "@styled-icons/boxicons-solid";
import { Heart, HeartOutlined } from "@styled-icons/entypo";
import { useState } from "react";
import ServiceCard from "@/components/serviceCard";

const LojaScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-content-wrapper-max">
          <div className="flex items-center min-w-full gap-6 h-52">
            <Image
              src="/assets/images/wallpaper.jpg"
              alt="Picture of the author"
              width={1200}
              height={200}
              layout="fixed"
              objectFit="cover"
              className="min-w-full min-h-full"
            />
          </div>
          <div className="relative flex px-8 mt-5 ">
            <div className="md:max-w-[180px] absolute top-0 left-6 -translate-y-1/2 flex md:min-h-[180px] min-h-[120px] max-w-[120px]">
              <Image
                src="/assets/images/profile.jpg"
                alt="Picture of the author"
                width={180}
                height={180}
                objectFit="cover"
                className="min-w-full min-h-full duration-300 rounded-3xl "
              />
            </div>
            <div className="flex ml-[130px] md:ml-[210px] justify-between">
              <div>
                <h1 className="text-2xl font-medium md:text-3xl">
                  Valquíria Pets e acessorios
                </h1>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="font-sans text-xs font-medium md:text-sm">
                    4.6
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end flex-auto">
              {isFavorite ? (
                <button
                  onClick={() => setIsFavorite(false)}
                  className="mb-5 font-sans text-xs font-medium cursor-pointer h-fit md:text-sm"
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </button>
              ) : (
                <button
                  onClick={() => setIsFavorite(true)}
                  className="font-sans text-xs font-medium cursor-pointer h-fit md:text-sm"
                >
                  <HeartOutlined className="w-6 h-6 text-red-500" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-4 mt-10 md:mt-20">
          <div className="w-full px-2 mb-20 md:px-4 max-w-content-wrapper-max">
            <h1 className="text-2xl font-medium">Serviços</h1>
            <div>
              <div className="flex flex-wrap justify-between gap-5 mt-4">
                {array.map((item) => (
                  <div key={item} className="w-full md:max-w-[49%]">
                    <button className="flex justify-between w-full p-4  h-44 border border-[#f2f2f2] hover:border-[#dbdad9] shadow rounded-md duration-200 hover:shadow-md">
                      <div className="flex flex-col items-start h-full ">
                        <h1 className="mb-3 text-xl font-medium text-secundary">
                          Banho e tosa
                        </h1>
                        <div className="flex flex-col items-start justify-between h-full">
                          <span className="text-sm font-medium text-secundary">
                            Banho com perfumes e tosa higiênica
                          </span>
                          <span className="text-base font-medium text-secundary">
                            R$ 30,00
                          </span>
                        </div>
                      </div>
                      <div className="flex ">
                        <Image
                          src="/assets/images/banho.jpg"
                          alt="Picture of the author"
                          width={142}
                          height={142}
                          objectFit="cover"
                          className="rounded-md "
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <>
          <div className="fixed top-0 left-0 z-[80] w-full h-full bg-black bg-opacity-50"></div>
          <ServiceCard
            service={{
              title: "Banho e tosa",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
              icon: "/assets/images/banho.jpg",
            }}
          />
        </>
      )}
    </>
  );
};

export default LojaScreen;

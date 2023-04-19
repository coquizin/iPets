import Image from "next/image";
import { Star } from "@styled-icons/boxicons-solid";
import { Heart, HeartOutlined } from "@styled-icons/entypo";
import { useState } from "react";

const LojaScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
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
              <span
                onClick={() => setIsFavorite(false)}
                className="mb-5 font-sans text-xs font-medium cursor-pointer h-fit md:text-sm"
              >
                <Heart className="w-6 h-6 text-red-500" />
              </span>
            ) : (
              <span
                onClick={() => setIsFavorite(true)}
                className="font-sans text-xs font-medium cursor-pointer h-fit md:text-sm"
              >
                <HeartOutlined className="w-6 h-6 text-red-500" />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full px-4 mt-10 md:mt-20">
        <div className="w-full h-screen px-2 md:px-4 max-w-content-wrapper-max">
          <h1 className="text-2xl font-medium text-secundary">Serviços</h1>
        </div>
      </div>
    </div>
  );
};

export default LojaScreen;

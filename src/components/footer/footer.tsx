import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#161616] text-white">
      <div className="flex flex-col justify-end h-full w-content-wrapper-max ">
        <div className="flex justify-between min-h-[424px]">
          <div className="flex items-center justify-center min-h-full">
            <Image
              src={"/assets/images/logoPets.svg"}
              alt="Logo iPets"
              width={90}
              height={90}
            />
          </div>
          <div className="flex gap-20 mt-20">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA]/[.9] mb-2 text-lg">Links úteis</p>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA]/[.9] mb-2 text-lg">Siga iPets</p>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA]/[.9] mb-2 text-lg">Opções do site</p>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
              <span className="text-sm text-[#F4EFEA]/[.8] cursor-pointer">
                loren ipson
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-[200px]">
            <h3 className="font-Oswald font-medium text-[#F4EFEA]/[.9] text-2xl text-center">
              Dê uma vida mais divertida e saudável ao seu querido animal.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-9 text-[#F4EFEA]/[.9]  border-t border-[#F4EFEA]/[.9]">
        <div className="flex justify-between w-content-wrapper-max">
          <p className="cursor-default">
            Copyright © 2023 iPets. All Rights Reserved.
          </p>
          <p className="cursor-pointer">Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

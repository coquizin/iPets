import Image from "next/image";
import { Verified } from "@styled-icons/material";

export default function HomeScreen() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 pt-7">
        <h1 className="text-4xl text-[2.5rem] my-6 max-w-[650px] font-Oswald font-medium text-center text-[#0E1428] uppercase">
          Encontre os melhores profissionais para seus animais
        </h1>
        <span className="text-lg">O que você precisa está aqui.</span>
      </div>
      <div className="flex flex-col bg-[#D9D9D9] items-center py-10  h-screen">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="text-4xl  max-w-[800px] font-medium text-center mt-6 text-[#0E1428] ">
            Escolha a opção que deseja
          </h1>
          <span className="text-lg">
            Não encontrou o que queria?{" "}
            <a className="text-[#D95D39]" href="">
              clique aqui.
            </a>
          </span>
        </div>
        <div>
          <div className="flex mb-10 gap-14">
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full">
              <div className="w-full max-h-[236px] ">
                <Image
                  src="/assets/images/dogWalker.jpg"
                  alt="dog walker"
                  layout="intrinsic"
                  width={280}
                  height={236}
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-end">
                <h3 className="text-lg font-medium">solicite um dog walker </h3>
                <p className="text-xs">
                  profissional que oferece o serviço de passear com seu pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E1428] flex flex-col items-center pb-32 ">
        <div className=" w-content-wrapper-max">
          <div className="flex items-end gap-3 mb-16 mt-28">
            <h3 className="text-4xl font-medium text-white">
              Top profissionais
            </h3>
            <span className="text-[#CCC6C6]">ver mais</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-content-wrapper-max">
          <div className="flex items-end gap-3 mb-16 mt-28">
            <h3 className="text-4xl font-medium text-white">
              Top veterinários
            </h3>
            <span className="text-[#CCC6C6]">ver mais</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-6 hover:shadow-md">
              <div>
                <Image
                  src={"/assets/images/bestPro.jpg"}
                  alt="Icon"
                  className="rounded-full"
                  objectFit="cover"
                  height={90}
                  width={90}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <p className="text-lg font-medium text-white">João Kleber</p>
                <span className="text-[#7B9E89]">@jkleber</span>
                <span className="text-[#CCC6C6]">543 serviços</span>
              </div>
              <div className="flex items-center ml-4">
                <Verified className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

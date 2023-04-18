import Image from "next/image";
import { useForm } from "react-hook-form";
import { VipCrown } from "@styled-icons/remix-line";

type Name = {
  name: string;
};

const ProfileScreen = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Name>({});

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="bg-[#F5F5F5] flex md:flex-row flex-col justify-between max-w-content-wrapper-max w-full mt-10 rounded-[3px] p-6 ">
        <div className="flex flex-row gap-5 md:gap-10">
          <div className="flex cursor-pointer relative group w-fit bg-black rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
            <Image
              src="/assets/images/profile.jpg"
              alt="Picture of the author"
              width={180}
              height={180}
              objectFit="cover"
              className="min-w-full min-h-full duration-300 rounded-3xl group-hover:opacity-50"
            />
            <div className="absolute hidden text-base font-medium text-white -translate-x-1/2 -translate-y-1/2 group-hover:block group top-1/2 left-1/2">
              Alterar foto
            </div>
          </div>
          <div className="flex flex-col gap-2 md:justify-start md:mt-5">
            <h1 className="text-2xl font-medium md:text-3xl text-secundary">
              Anya Foger
            </h1>
            <div>
              <div className="flex items-center gap-1">
                <VipCrown className="text-amber-500" size={24} />
                <span className="font-medium md:text-xl text-amber-500">
                  Assinante VIP
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:items-start">
          <button className="px-4 py-2 font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-500/75">
            <span>Editar</span>
          </button>
        </div>
      </div>
      <div className="bg-[#F5F5F5]  max-w-content-wrapper-max w-full mt-10 rounded-[3px] p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium md:text-4xl text-secundary">
            Pets
          </h1>
          <button className="px-4 py-2 font-medium duration-300 border-2 rounded-md border-secundary text-secundary hover:bg-yellow-400">
            <span>Adicionar</span>
          </button>
        </div>
        <div className="flex flex-col justify-between w-full md:flex-row ">
          <div className="flex flex-row gap-5 md:gap-10">
            <div className="flex cursor-default relative group w-fit bg-black rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
              <Image
                src="/assets/images/bond.jpg"
                alt="Picture of the author"
                width={180}
                height={180}
                objectFit="cover"
                className="min-w-full min-h-full duration-300 rounded-3xl "
              />
            </div>
            <div className="flex flex-col gap-2 md:justify-start md:mt-5">
              <h1 className="text-2xl font-medium md:text-3xl text-secundary">
                Bond
              </h1>
              <div>
                <ul>
                  <li>
                    <span className="font-medium">Raça:</span> <span>SRD</span>
                  </li>
                  <li>
                    <span className="font-medium">Idade:</span>{" "}
                    <span>1 ano</span>
                  </li>
                  <li>
                    <span className="font-medium">Sexo:</span>{" "}
                    <span>Macho</span>
                  </li>
                  <li>
                    <span className="font-medium">Porte:</span>{" "}
                    <span>Pequeno</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-2 mt-5">
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-yellow-500 rounded-md max-h-fit hover:bg-yellow-500/75">
              <span>Editar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-500/75">
              <span>Excluir</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full pt-4 border-t-2 border-gray-400 md:flex-row">
          <div className="flex flex-row gap-5 md:gap-10">
            <div className="flex cursor-default relative group w-fit bg-black rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
              <Image
                src="/assets/images/bond.jpg"
                alt="Picture of the author"
                width={180}
                height={180}
                objectFit="cover"
                className="min-w-full min-h-full duration-300 rounded-3xl "
              />
            </div>
            <div className="flex flex-col gap-2 md:justify-start md:mt-5">
              <h1 className="text-2xl font-medium md:text-3xl text-secundary">
                Bond
              </h1>
              <div>
                <ul>
                  <li>
                    <span className="font-medium">Raça:</span> <span>SRD</span>
                  </li>
                  <li>
                    <span className="font-medium">Idade:</span>{" "}
                    <span>1 ano</span>
                  </li>
                  <li>
                    <span className="font-medium">Sexo:</span>{" "}
                    <span>Macho</span>
                  </li>
                  <li>
                    <span className="font-medium">Porte:</span>{" "}
                    <span>Pequeno</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-2 mt-5">
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-yellow-500 rounded-md max-h-fit hover:bg-yellow-500/75">
              <span>Editar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-500/75">
              <span>Excluir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

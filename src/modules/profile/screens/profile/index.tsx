import Image from "next/image";
import { useForm } from "react-hook-form";
import { VipCrown } from "@styled-icons/remix-line";
import { useCreateId } from "@/stores/useId";
import { useGetCostumer } from "@/services/consumers";

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

  const userId = useCreateId((state) => state.data.id);
  const user = useGetCostumer(userId);

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="bg-[#F5F5F5] flex md:flex-row flex-col justify-between max-w-content-wrapper-max w-full mt-10 rounded-[3px] p-6 ">
        <div className="flex flex-row gap-5 md:gap-10">
          <div className="flex cursor-pointer relative group w-fit bg-black rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
            {user?.data?.avatar ? (
              <Image
                src="/assets/images/profile.jpg"
                alt="Picture of the author"
                width={180}
                height={180}
                objectFit="cover"
                className="min-w-full min-h-full duration-300 rounded-3xl group-hover:opacity-50"
              />
            ) : (
              <div className="flex items-center text-3xl group-hover:opacity-50 duration-200 justify-center md:min-w-[180px] md:min-h-[180px] min-w-[120px] min-h-[120px] text-white uppercase bg-blue-900 rounded-3xl">
                {user.data?.name?.slice(0, 2) as string}
              </div>
            )}
            <div className="absolute hidden text-base font-medium text-white -translate-x-1/2 -translate-y-1/2 group-hover:block group top-1/2 left-1/2">
              Alterar foto
            </div>
          </div>
          <div className="flex flex-col gap-2 md:justify-start md:mt-5">
            <h1 className="text-2xl font-medium md:text-3xl text-secundary">
              {user.data?.name}
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
          <button className="px-4 py-2 font-medium bg-yellow-500 border-2 rounded-md border-secundary hover:bg-yellow-500/75">
            <span>Editar</span>
          </button>
        </div>
      </div>
      <div className="bg-[#F5F5F5]  max-w-content-wrapper-max w-full mt-10 rounded-[3px] p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium md:text-4xl text-secundary">
            Pets
          </h1>
          <button className="px-4 py-2 font-medium duration-300 bg-yellow-500 border-2 rounded-md border-secundary hover:bg-yellow-400">
            <span>Adicionar</span>
          </button>
        </div>
        <div className="flex flex-col justify-between w-full md:flex-row ">
          {user?.data?.pets?.map((pet, idx) => (
            <div key={idx} className="flex flex-row gap-5 md:gap-10">
              <div className="flex cursor-default relative group w-fit bg-black rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
                {pet?.avatar ? (
                  <Image
                    src={`data:image/jpeg;base64,${pet?.avatar}`}
                    alt="Picture of the author"
                    width={180}
                    height={180}
                    objectFit="cover"
                    className="min-w-full min-h-full duration-300 rounded-3xl "
                  />
                ) : (
                  <div className="flex items-center text-3xl duration-200 justify-center md:min-w-[180px] md:min-h-[180px] min-w-[120px] min-h-[120px] text-white uppercase bg-blue-900 rounded-3xl">
                    {pet?.name?.slice(0, 2) as string}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 md:justify-start md:mt-5">
                <h1 className="text-2xl font-medium md:text-3xl text-secundary">
                  {pet.name}
                </h1>
                <div>
                  <ul>
                    <li>
                      <span className="font-medium">Espécie:</span>{" "}
                      <span>{pet.species}</span>
                    </li>
                    <li>
                      <span className="font-medium">Raça:</span>{" "}
                      <span>{pet.race}</span>
                    </li>
                    <li>
                      <span className="font-medium">Idade:</span>{" "}
                      <span>{pet.age} ano(s)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-start justify-center gap-2 mt-5">
            <button className="flex items-center gap-2 px-4 py-2 font-medium bg-yellow-500 border-2 rounded-md border-secundary max-h-fit hover:bg-yellow-500/75">
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

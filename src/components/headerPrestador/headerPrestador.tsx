import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown } from "@styled-icons/evaicons-solid";
import MenuProfile from "./components/menuProfile";
import { useCreateId } from "@/stores/useId";
import { useGetProvider } from "@/services/providers";

export default function HeaderPrestador() {
  const [showMenuUser, setShowMenuUser] = useState(false);
  const userId = useCreateId((state) => state.data.id);

  const user = useGetProvider(userId);

  return (
    <>
      <header className="fixed px-4 top-0 right-0 left-0 z-[60] fm:absolute">
        <div
          className={`
          fixed inset-0 h-16 duration-300 md:h-24 bg-white fm:hidden ${" border-b border-[F4EFEA] shadow-sm"}
        )`}
        />
        <div className="relative z-50 flex items-center justify-center w-full h-16 px-2 text-sm md:h-24 md:px-4">
          <div className="grid items-center justify-between grid-cols-2 w-content-wrapper-max">
            <Link href={"/"} passHref>
              <a>
                <div className="flex justify-start gap-2 cursor-pointer md:ml-0 justify-self-center md:justify-self-start md:max-w-fit">
                  <Image
                    alt="logo iPets"
                    src="/assets/images/LogoPets.svg"
                    width={45}
                    className="min-w-max"
                    height={45}
                  />
                  <div className="justify-center hidden text-3xl font-medium text-yellow-500 md:flex">
                    Prestador
                  </div>
                </div>
              </a>
            </Link>

            {Boolean(user.data) || user.isFetching ? (
              <div className="relative flex items-center gap-4 justify-self-end">
                <div
                  onClick={() => setShowMenuUser(!showMenuUser)}
                  className={`flex items-center gap-1 cursor-pointer group`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full">
                    {user.data?.avatar ? (
                      <Image
                        alt="foto de perfil"
                        src="/assets/images/profile.jpg"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 text-white uppercase bg-blue-900 rounded-full">
                        {user.data?.name?.slice(0, 2) as string}
                      </div>
                    )}
                  </div>
                  <ArrowDown
                    size={20}
                    className={`duration-200 text-secundary group-hover:translate-y-[2px] ${
                      showMenuUser && "rotate-180"
                    }`}
                  />
                </div>
                {showMenuUser && (
                  <MenuProfile
                    username={user.data?.name?.split(" ")[0] as string}
                    avatar={user.data?.avatar || ""}
                    isOpen={showMenuUser}
                    setShowMenu={setShowMenuUser}
                  />
                )}
              </div>
            ) : (
              <div className="flex gap-4 justify-self-end">
                <Link href={"/prestador/criar-conta"} passHref>
                  <a className="md:flex hidden items-center justify-center w-[100px] h-[35px] text-[1.1rem] text-secundary">
                    criar conta
                  </a>
                </Link>
                <Link href={"/prestador/login"} passHref>
                  <a className="flex items-center justify-center w-[100px] h-[35px] text-[1.1rem] text-black duration-200 rounded-md bg-yellow-500 hover:bg-yellow-500/75 border border-secundary">
                    entrar
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

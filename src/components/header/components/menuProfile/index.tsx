import Image from "next/image";
import { VipCrown } from "@styled-icons/remix-line";
import { SignOut } from "@styled-icons/octicons";
import { User } from "@styled-icons/boxicons-regular";
import { History } from "@styled-icons/material";
import { Coupon } from "@styled-icons/remix-line";
import { CreditCard } from "@styled-icons/bootstrap";
import { HelpCircle } from "@styled-icons/boxicons-regular";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuProfileProps } from "./types";
import { useRouter } from "next/router";

const MenuProfile = ({
  setShowMenu,
  isOpen,
  avatar,
  username,
}: MenuProfileProps) => {
  const [animationOff, setAnimationOff] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setAnimationOff(false);
    }
  }, [isOpen]);

  const close = () => {
    setAnimationOff(true);
    setTimeout(() => setShowMenu(false), 280);
  };

  return (
    <>
      <div
        onClick={() => close()}
        className="fixed top-0 left-0 w-screen h-screen"
      />
      <div
        className={`
        ${animationOff ? `animate-height-out` : `animate-height-in`}
        absolute  text-secundary top-12  overflow-hidden bg-white border rounded-md shadow-2xl right-0 w-[300px]`}
      >
        <div className="flex items-center gap-3 p-4 border-b cursor-default group">
          <div className="flex items-center justify-center rounded-full w-14 h-14">
            <Image
              alt="foto de perfil"
              src={avatar}
              width={56}
              height={56}
              className="rounded-full"
            />
          </div>
          <div>
            <span className="text-xl font-medium">{username}</span>
            <div className="flex items-end gap-1">
              <VipCrown className="text-amber-500" size={20} />
              <span className="text-sm font-medium text-amber-500">
                Assinante VIP
              </span>
            </div>
          </div>
        </div>

        <div className="border-b">
          <Link href={"/perfil"} passHref>
            <a className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-200">
              <User size={20} className="text-secundary" />
              <span className="text-sm font-medium">Meu perfil</span>
            </a>
          </Link>
          <Link href={"/historico"} passHref>
            <a className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-200">
              <History size={20} className="text-secundary" />
              <span className="text-sm font-medium">Histórico</span>
            </a>
          </Link>
          <Link href={"/carteira"} passHref>
            <a className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-200">
              <CreditCard size={20} className="text-secundary" />
              <span className="text-sm font-medium">Carteira</span>
            </a>
          </Link>
          <Link href={"/cupons"} passHref>
            <a className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-200">
              <Coupon size={20} className="text-secundary" />
              <span className="text-sm font-medium">Cupons</span>
            </a>
          </Link>
          <Link href={"/suporte"} passHref>
            <a className="flex items-center gap-2 p-4 cursor-pointer hover:bg-slate-200">
              <HelpCircle size={20} className="text-secundary" />
              <span className="text-sm font-medium">Suporte</span>
            </a>
          </Link>
        </div>

        <div
          onClick={() => router.replace(`/logout`)}
          className="flex items-center p-4 cursor-pointer hover:bg-slate-200"
        >
          <SignOut size={20} className="text-secundary" />
          <span className="ml-2 text-sm font-medium">Sair</span>
        </div>
      </div>
    </>
  );
};

export default MenuProfile;

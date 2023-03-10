import useScroll from "@/hooks/useOnScrolls";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideSheet from "./components/sidesheet";
import { MenuToggle, MenuToggleSpan } from "./styles";

export default function Header() {
  const isScrolled = useScroll(0);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed px-4 top-0 right-0 left-0 z-[60] fm:absolute">
        <div
          className={`
          fixed inset-0 h-16 md:h-24 bg-white fm:hidden
        )`}
        />
        <div className="relative z-50 flex items-center justify-center w-full h-16 px-2 text-sm md:h-24 md:px-4">
          <div className="grid items-center justify-between grid-cols-3 w-content-wrapper-max">
            <div className="flex !z-[9999] items-center h-full mt-2 md:hidden">
              <MenuToggle onClick={() => setShowMenu(!showMenu)}>
                <MenuToggleSpan checked={showMenu}></MenuToggleSpan>
                <MenuToggleSpan checked={showMenu}></MenuToggleSpan>
                <MenuToggleSpan checked={showMenu}></MenuToggleSpan>
              </MenuToggle>
            </div>

            <Link href={"/"} passHref>
              <div className="flex gap-2 -ml-5 cursor-pointer md:ml-0 justify-self-center md:justify-self-start md:max-w-fit">
                <Image
                  alt="logo iPets"
                  src="/assets/images/LogoPets.svg"
                  width={32}
                  className="min-w-max"
                  height={32}
                />
                <div className="flex justify-center text-3xl font-medium text-yellow-500">
                  iPets
                </div>
              </div>
            </Link>

            <nav className="justify-center hidden text-secundary md:flex">
              <ul className="flex space-x-4">
                <li>
                  <Link href={"/"} passHref>
                    <a className="text-[1.1rem] duration-200 ">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a className="text-[1.1rem] duration-200 ">Explore</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a className="text-[1.1rem] duration-200 ">Cuidadores</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a className="text-[1.1rem] duration-200 ">Parceiros</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex gap-4 justify-self-end">
              <Link href={"/criar-conta"} passHref>
                <a className="md:flex hidden items-center justify-center w-[100px] h-[35px] text-[1.1rem] text-yellow-500">
                  criar conta
                </a>
              </Link>
              <Link href={"/login"} passHref>
                <a className="flex items-center justify-center w-[100px] h-[35px] text-[1.1rem] text-white duration-200 rounded-md bg-yellow-500 hover:bg-yellow-500/75">
                  entrar
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {showMenu && (
        <SideSheet
          isOpen={showMenu}
          onClose={() => setShowMenu(false)}
          title="test"
          overlay={true}
        >
          a
        </SideSheet>
      )}
    </>
  );
}

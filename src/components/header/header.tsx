import useScroll from "@/hooks/useOnScrolls";
import Image from "next/image";

export default function Header() {
  const isScrolled = useScroll(0);

  return (
    <header className="fixed top-0 right-0 left-0 z-[1000] fm:absolute">
      <div
        className={`
          fixed inset-0 h-16  border-divider-light backdrop-blur dark:border-divider-dark dark:bg-slate-900/80 fm:hidden
        )`}
      />
      <div className="relative z-50 flex items-center justify-center  w-full h-16 px-2 text-sm md:px-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-[#ffffff]/[.08] after:h-[1px]">
        <div className="grid items-center justify-between grid-cols-3 w-content-wrapper-max">
          <div>Logo</div>
          <div className="flex justify-center text-3xl font-medium text-yellow-500">
            iPets
          </div>
          <nav className="justify-center hidden  md:flex">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-xl text-white duration-200 hover:text-gray-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-white duration-200 hover:text-gray-300"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-white duration-200 hover:text-gray-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-white duration-200 hover:text-gray-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

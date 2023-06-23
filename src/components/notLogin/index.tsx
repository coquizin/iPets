import { useRouter } from "next/router";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const NeedLogin = ({ show, onClick }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);
  const router = useRouter();

  return createPortal(
    <>
      <div
        onClick={() => {
          onClick(false);
          document.body.style.overflow = "unset";
        }}
        className="fixed z-[80] w-screen top-0 bottom-0 left-0 right-0 h-screen bg-black/60"
      />
      <div className="fixed z-[80] max-w-[330px] w-full -translate-x-1/2 -translate-y-1/2 rounded-md p-4 bg-white top-1/2 left-1/2">
        <h1 className="text-2xl">Importante</h1>
        <p className="mt-2 ">Para continuar, você precisa estar logado.</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              onClick(false);
              router.push("/login");
              document.body.style.overflow = "unset";
            }}
            className="px-4 py-2 text-white rounded-md bg-secundary"
          >
            Entrar
          </button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default NeedLogin;

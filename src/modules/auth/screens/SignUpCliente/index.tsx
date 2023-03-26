import Image from "next/image";
import Link from "next/link";
import Stepper from "@/components/Stepper";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import DadosClientes from "./components/DadosClientes";
import { useMemo } from "react";
import DadosEndereco from "./components/Endereco";
import DadosPets from "./components/DadosPets";

export default function SignUpClienteScreen() {
  const orderId = useCreateAccountScreen((state) => state.data.orderId);

  const setOrderScreen = useMemo(() => {
    switch (orderId) {
      case 0:
        return <DadosClientes />;
      case 1:
        return <DadosEndereco />;
      case 2:
        return <DadosPets />;
      default:
        return <DadosClientes />;
    }
  }, [orderId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full px-5 bg-[#E5E5E5]">
      <div className="w-screen mb-5 cursor-pointer">
        <Link href={"/"} passHref>
          <a>
            <div className="flex items-center justify-center mt-4 text-xl">
              <Image
                alt="logo iPets"
                src="/assets/images/LogoPets.svg"
                width={56}
                height={56}
              />
              iPets
            </div>
          </a>
        </Link>
      </div>
      <div className="bg-white rounded-[3px] flex-col flex border border-solid border-[#F1F6FA]  max-w-[828px] md:px-[50px] py-5 px-5 mb-20 w-full min-h-[700px]">
        <Stepper
          status={orderId}
          options={[
            "Dados do cliente",
            "Endereço do cliente",
            "Dados dos pets",
          ]}
        >
          {setOrderScreen}
        </Stepper>
      </div>
    </div>
  );
}

import { formatToBRL } from "brazilian-values";
import { Plus, CreditCard } from "@styled-icons/bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function CarteiraScreen() {
  const array = [1, 2, 3, 4];

  const array2 = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex bg-[#F5F5F5] justify-center items-center px-6 !py-10 pt-7">
        <div className="flex items-center justify-start w-full h-full max-w-content-wrapper-max">
          <div className="flex flex-col gap-2 min-h-[170px] md:w-[500px] w-full justify-between p-6 shadow-lg bg-white rounded-md border border-[#F4EFEA]">
            <h2 className="text-xl font-medium opacity-80">Saldo disponível</h2>
            <div className="flex flex-col justify-between gap-2 md:items-end md:flex-row">
              <span className="text-4xl opacity-80">{formatToBRL(0)}</span>
              <button className="flex items-center justify-center px-4 py-2 text-[1.1rem] font-medium duration-200 rounded-md border-2 border-[#d95d39] text-[#d95d39]">
                Adiconar fundos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 mt-10 bg-white">
        <div className="flex flex-col items-start w-full max-w-content-wrapper-max">
          <h1 className="text-xl font-medium opacity-80">
            Formas de pagamento
          </h1>
          <div className="flex flex-wrap mt-10 md:gap-9 gap-7">
            <div className="flex cursor-pointer flex-col gap-2 min-h-[150px] w-[150px] hover:bg-black/5 duration-200 justify-between p-4 rounded-md border-2 border-[#F4EFEA]">
              <Plus size={30} className="text-yellow-500" />
              <div className="flex flex-col opacity-80">
                <span>Cadastrar</span>
                <span className="font-medium">novo cartão</span>
              </div>
            </div>

            {array.map((item, idx) => {
              if (idx <= 1)
                return (
                  <div
                    key={item}
                    className="flex cursor-pointer flex-col gap-2 min-h-[150px] w-[150px] hover:bg-black/5 duration-200 justify-between p-4 rounded-md border-2 border-[#F4EFEA]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md w-[35px] h-[25px]">
                        <Image
                          src={"/assets/images/mastercard.png"}
                          width={35}
                          height={25}
                          alt="Logo Credit Card"
                          className="flex rounded-md"
                          objectFit="contain"
                        />
                      </div>
                      <span className=" opacity-80">crédito</span>
                    </div>
                    <div className="flex flex-col opacity-80">
                      <span>MasterCard</span>
                      <span className="font-medium">7195</span>
                    </div>
                  </div>
                );
            })}

            <div className="flex cursor-pointer flex-col gap-2 min-h-[150px] w-[150px] hover:bg-black/5 duration-200 justify-between p-4 rounded-md border-2 border-[#F4EFEA]">
              <CreditCard size={25} className="text-yellow-500" />
              <div className="flex flex-col opacity-80">
                <span>Ver todas formas</span>
                <span className="font-medium">de pagamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 my-10 bg-white">
        <div className="flex flex-col items-start w-full max-w-content-wrapper-max">
          <h1 className="text-xl font-medium opacity-80">Histórico</h1>
          <div className="w-full">
            {array2.map((item) => (
              <div
                key={item}
                className="flex  justify-between gap-2 mt-5 min-h-[150px] w-full hover:bg-black/5 duration-200 p-4 rounded-md border-2 border-[#F4EFEA]"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium opacity-80">
                    Valquíria Petshop
                  </span>
                  <span className="opacity-80">Banho e tosa</span>
                  <div className="flex flex-col">
                    <span className="opacity-80">12/12/2021</span>
                    <span className="opacity-80">12:00</span>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md w-[35px] h-[25px]">
                      <Image
                        src={"/assets/images/mastercard.png"}
                        width={35}
                        height={25}
                        alt="Logo Credit Card"
                        className="flex rounded-md"
                        objectFit="contain"
                      />
                    </div>
                    <span className="opacity-80">crédito</span>
                  </div>

                  <div className="flex flex-col items-end opacity-80">
                    <span>MasterCard</span>
                    <span className="font-medium">7195</span>
                  </div>
                  <div>
                    <span className="text-xl font-medium opacity-80">
                      {formatToBRL(54.8)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <Link href={"/historico"} passHref>
              <a className="flex items-center justify-center mt-10 px-4 py-2 text-[1.1rem] font-medium duration-200 rounded-md border-2 border-[#d95d39] text-[#d95d39]">
                Ver mais
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

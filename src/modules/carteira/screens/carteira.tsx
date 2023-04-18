import { formatToBRL } from "brazilian-values";
import { Plus, CreditCard } from "@styled-icons/bootstrap";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Input from "@/components/input/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  formatToCVV,
  formatToCreditCard,
  formatToOnlyLetters,
  formatToValidate,
} from "@/utils/helpers/Masks";
import { Close } from "@styled-icons/ionicons-solid";

type CardProps = {
  cardNumber: string;
  name: string;
  validade: string;
  cvv: string;
};

export default function CarteiraScreen() {
  const array = [1, 2, 3, 4];
  const [backView, setBackView] = useState(false);
  const [showModalCC, setShowModalCC] = useState(false);
  const [data, setData] = useState({
    name: "",
    number: "",
    validate: "",
    cvv: "",
  });
  const array2 = [1, 2, 3, 4, 5];
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CardProps>({});

  const onSumit = (data: CardProps) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex bg-[#F5F5F5] justify-center items-center px-6 !py-10 pt-7">
        <div className="flex items-center justify-start w-full h-full max-w-content-wrapper-max">
          <div className="flex flex-col gap-2 min-h-[170px] md:w-[500px] w-full justify-between p-6 shadow-lg bg-white rounded-md border border-[#F4EFEA]">
            <h2 className="text-xl font-medium opacity-80">Saldo disponível</h2>
            <div className="flex flex-col justify-between gap-2 md:items-end md:flex-row">
              <span className="text-4xl opacity-80">{formatToBRL(0)}</span>
              <button
                disabled
                about="Adicionar fundos"
                className="flex items-center justify-center px-4 py-2 text-[1.1rem] font-medium duration-200 rounded-md border-2 border-[#d95d39] text-[#d95d39] disabled:text-gray-400 disabled:border-gray-400 disabled:bg-gray-300"
              >
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
            <div
              onClick={() => setShowModalCC(true)}
              className="flex cursor-pointer flex-col gap-2 min-h-[150px] w-[150px] hover:bg-black/5 duration-200 justify-between p-4 rounded-md border-2 border-[#F4EFEA]"
            >
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

      {showModalCC && (
        <>
          <div
            onClick={() => setShowModalCC(false)}
            className="fixed top-0 bottom-0 left-0 right-0 z-[80] w-screen h-screen bg-black/80"
          />
          <div
            onClick={() => setBackView(false)}
            className="fixed -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-[80] left-1/2 max-w-[500px] w-full top-1/2 p-6  rounded-md"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-between w-full">
                <h1 className="text-2xl font-medium">
                  Cadastrar cartão de crédito
                </h1>
                <button
                  onClick={() => setShowModalCC(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10"
                >
                  <Close size={20} />
                </button>
              </div>
              <Card data={data} icon={false} back={backView} />
              <form onSubmit={handleSubmit(onSumit)}>
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col !font-sans gap-1 mb-2 max-w-[400px] min-w-[300px] w-full">
                    <Input
                      label="Número do cartão"
                      name="cardNumber"
                      type="text"
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      errors={errors.cardNumber}
                      register={{
                        ...register("cardNumber", {
                          required: true,
                          onChange: (e) => {
                            setValue(
                              "cardNumber",
                              formatToCreditCard(e.target.value)
                            );
                            setData({ ...data, number: e.target.value });
                          },
                        }),
                      }}
                    />
                  </div>
                  <div className="flex flex-col !font-sans gap-1 mb-2 max-w-[400px] min-w-[300px] w-full">
                    <Input
                      label="Nome do titular"
                      name="name"
                      type="text"
                      id="name"
                      errors={errors.name}
                      register={{
                        ...register("name", {
                          required: true,
                          onChange: (e) => {
                            setValue(
                              "name",
                              formatToOnlyLetters(e.target.value)
                            );
                            setData({ ...data, name: e.target.value });
                          },
                        }),
                      }}
                    />
                  </div>
                  <div className="flex max-w-[400px] gap-8 justify-between w-full">
                    <div className="flex flex-col !font-sans gap-1 mb-2 w-full">
                      <Input
                        label="Validade"
                        name="validade"
                        type="text"
                        id="validade"
                        placeholder="MM/AA"
                        errors={errors.validade}
                        register={{
                          ...register("validade", {
                            required: true,
                            onChange: (e) => {
                              setValue(
                                "validade",
                                formatToValidate(e.target.value)
                              );
                              setData({ ...data, validate: e.target.value });
                            },
                          }),
                        }}
                      />
                    </div>
                    <div
                      onClick={() => setBackView(true)}
                      className="flex flex-col !font-sans gap-1 mb-2 w-full"
                    >
                      <Input
                        label="CVV"
                        name="cvv"
                        type="text"
                        id="cvv"
                        errors={errors.cvv}
                        register={{
                          ...register("cvv", {
                            required: true,
                            onChange: (e) => {
                              setValue("cvv", formatToCVV(e.target.value));
                              setBackView(true);
                              setData({ ...data, cvv: e.target.value });
                            },
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end w-full mt-4">
                    <button
                      type="submit"
                      className="flex items-center justify-center  px-4 py-2 text-[1.1rem] font-medium duration-200 rounded-md bg-yellow-500 text-white"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

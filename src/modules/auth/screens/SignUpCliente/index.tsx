import { formatToCPF, formatToGenericPhone } from "brazilian-values";
import Input from "@/components/input/input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Cliente } from "./types";
import Stepper from "@/components/Stepper";
import { useCreateAccountScreen } from "@/pages/stores/useCreateAccount";

export default function SignUpClienteScreen() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Cliente>({
    defaultValues: { email: "", password: "", name: "", phone: "" },
  });

  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );

  const onSubmit = (data: Cliente) => {
    setCheckoutOrderId((orderId || 0) + 1);
    console.log(data);
  };

  return (
    <div className="flex justify-center min-h-screen px-5 bg-[#E5E5E5]">
      <div className="fixed mb-5 cursor-pointer top-5 left-10">
        <Link href={"/"} passHref>
          <div className="flex items-center justify-center ">
            <Image
              alt="logo iPets"
              src="/assets/images/LogoPets.svg"
              width={56}
              height={56}
            />
            iPets
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-[3px] flex-col flex justify-end border border-solid border-[#F1F6FA]  max-w-[828px] md:px-[50px] py-5 px-5 my-20 w-full max-h-[807px]">
        <Stepper
          status={orderId}
          options={[
            "Dados do cliente",
            "endereço do cliente",
            "dados dos pets",
          ]}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="font-medium mb-2 text-[1.25rem]">
                Dados do cliente
              </h1>
              <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
                <div className="flex flex-col gap-1 max-w-[500px] w-full">
                  <Input
                    label="CPF"
                    name="cpf"
                    type="text"
                    id="cpf"
                    errors={errors.cpf}
                    register={{
                      ...register("cpf", {
                        required: "CPF é obrigatório",
                        minLength: {
                          value: 14,
                          message: "CPF deve ter 11 dígitos",
                        },
                        onChange: (e) => {
                          setValue("cpf", formatToCPF(e.target.value));
                        },
                      }),
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1 max-w-[500px] w-full">
                  <Input
                    label="Nome completo"
                    name="name"
                    type="text"
                    id="name"
                    errors={errors.name}
                    register={{
                      ...register("name", { required: "Nome é obrigatório" }),
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1 max-w-[190px]  w-full">
                  <Input
                    label="Data de nascimento"
                    name="birthDate"
                    type="text"
                    id="birthDate"
                    placeholder="__/__/____"
                    errors={errors.birthDate?.message}
                    register={{
                      ...register("birthDate", {
                        required: "Data de nascimento é obrigatório",
                      }),
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1 max-w-[190px] w-full">
                  <Input
                    label="Telefone"
                    name="phone"
                    type="text"
                    id="phone"
                    errors={errors.phone}
                    placeholder="(00) 0 0000-0000"
                    register={{
                      ...register("phone", {
                        required: "Telefone é obrigatório",
                        minLength: {
                          value: 14,
                          message: "Telefone deve ter 11 dígitos",
                        },
                        onChange: (e) => {
                          setValue(
                            "phone",
                            formatToGenericPhone(e.target.value)
                          );
                        },
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-medium "
                onClick={() => {
                  setCheckoutOrderId((orderId || 0) + 1);
                }}
              >
                Continuar
              </button>
            </div>
          </form>
        </Stepper>
      </div>
    </div>
  );
}

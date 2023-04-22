import Input from "@/components/input/input";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import {
  formatToCpf,
  formatToDate,
  formatToOnlyLetters,
} from "@/utils/helpers/Masks";
import { formatToCPF, formatToGenericPhone } from "brazilian-values";
import { useForm } from "react-hook-form";
import { useUpdateConsumer } from "@/services/consumers";
import { keyListConsumer } from "@/services/consumers/keys";
import { queryClient } from "@/libs/react-query";
import { Consumer } from "@/entities/Consumer/consumer";
import { useRouter } from "next/router";

type FormValues = {
  name: string;
  phone: string;
  cpf: string;
  birthDate: string;
};

export default function DadosClientes() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", phone: "", cpf: "", birthDate: "" },
  });

  const router = useRouter();
  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );

  const { mutate, isLoading } = useUpdateConsumer({
    onSuccess: async (res) => {
      await queryClient.invalidateQueries(keyListConsumer());
      setCheckoutOrderId((orderId || 0) + 1);
      window.scrollTo(0, 0);
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = (data: Consumer) => {
    const id = router.query.id as string;
    const ageCorrect = data.birthDate?.split("/");
    const date =
      ageCorrect && `${ageCorrect[2]}-${ageCorrect[1]}-${ageCorrect[0]}`;
    data = {
      cpf: data?.cpf?.replace(/\D/g, ""),
      phone: data?.phone?.replace(/\D/g, ""),
      birthDate: date,
      name: data?.name,
      _id: id,
    };

    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">Dados do cliente</h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="CPF"
              name="cpf"
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              errors={errors.cpf}
              register={{
                ...register("cpf", {
                  required: "CPF é obrigatório",
                  minLength: {
                    value: 14,
                    message: "CPF deve ter 11 dígitos",
                  },
                  onChange: (e) => {
                    setValue("cpf", formatToCpf(e.target.value));
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
                ...register("name", {
                  required: "Nome é obrigatório",
                  onChange: (e) => {
                    setValue("name", formatToOnlyLetters(e.target.value));
                  },
                }),
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
                  minLength: {
                    value: 10,
                    message: "",
                  },
                  onChange: (e) => {
                    setValue("birthDate", formatToDate(e.target.value));
                  },
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
              placeholder="(00) 00000-0000"
              register={{
                ...register("phone", {
                  required: "Telefone é obrigatório",
                  minLength: {
                    value: 14,
                    message: "Telefone deve ter 11 dígitos",
                  },
                  onChange: (e) => {
                    setValue("phone", formatToGenericPhone(e.target.value));
                  },
                }),
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Carregando" : "Continuar"}
        </button>
      </div>
    </form>
  );
}

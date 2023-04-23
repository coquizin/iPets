import Input from "@/components/input/input";
import { BankAccount } from "@/entities/BankAccount/bankaccount";
import { Provider } from "@/entities/Provider/provider";
import { queryClient } from "@/libs/react-query";
import { useUpdateConsumer } from "@/services/consumers";
import { keyListConsumer } from "@/services/consumers/keys";
import { useUpdateProvider } from "@/services/providers";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import { useCreateId } from "@/stores/useId";
import {
  formatToAccount,
  formatToAgency,
  formatToDigit,
  formatToNumber,
  formatToOnlyLetters,
} from "@/utils/helpers/Masks";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function DadosBank() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BankAccount>({
    defaultValues: {},
  });

  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );
  const idProvider = useCreateId((state) => state.data.id);

  const { mutate, isLoading } = useUpdateProvider({
    onSuccess: async () => {
      await queryClient.invalidateQueries(keyListConsumer());
      setCheckoutOrderId((orderId || 0) + 1);
      window.scrollTo(0, 0);
      router.replace("/prestador");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = (data: BankAccount) => {
    mutate({
      bankAccount: { ...data },
      _id: idProvider,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">
          Dados da conta bancária
        </h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Agência"
              name="agency"
              type="text"
              id="name"
              placeholder="0000"
              errors={errors.agency}
              register={{
                ...register("agency", {
                  required: "Agência é obrigatório",
                  onChange: (e) => {
                    setValue("agency", formatToAgency(e.target.value));
                  },
                }),
              }}
            />
          </div>
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Digito da agência"
              name="digit"
              type="text"
              id="digit"
              placeholder="0"
              errors={errors.digit}
              register={{
                ...register("digit", {
                  required: "Digito é obrigatório",
                  onChange: (e) => {
                    setValue("digit", formatToDigit(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Conta bancária"
              name="accountNumber"
              type="text"
              id="accountNumber"
              placeholder="0000000-0"
              errors={errors.accountNumber}
              register={{
                ...register("accountNumber", {
                  required: "Conta Bancária é obrigatório",
                  onChange: (e) => {
                    setValue("accountNumber", formatToAccount(e.target.value));
                  },
                }),
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md border-[#E9B13F] border-2  duration-150 mt-4 text-[#E9B13F] text-lg font-medium "
          onClick={() => {
            setCheckoutOrderId((orderId || 0) - 1);
            window.scrollTo(0, 0);
          }}
        >
          Voltar
        </button>
        <button
          type="submit"
          className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-medium "
        >
          {isLoading ? "Carregando" : "Confirmar"}
        </button>
      </div>
    </form>
  );
}

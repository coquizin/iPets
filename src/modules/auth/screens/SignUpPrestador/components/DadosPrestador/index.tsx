import Input from "@/components/input/input";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import { formatToCnpj, formatToOnlyLetters } from "@/utils/helpers/Masks";

import { useForm } from "react-hook-form";

import { queryClient } from "@/libs/react-query";

import { Provider } from "@/entities/Provider/provider";
import { CookieKey, setCookie } from "@/utils/cookies";
import { useCreateId } from "@/stores/useId";
import { useCreateProvider } from "@/services/providers";
import { keyListProvider } from "@/services/providers/keys";

export default function DadosPrestador() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Provider>({
    defaultValues: { name: "", cnpj: "", email: "", password: "" },
  });

  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );
  const setIdGlobal = useCreateId((state) => state.setIdGlobal);

  const { mutate, isLoading } = useCreateProvider({
    onSuccess: async (res) => {
      await queryClient.invalidateQueries(keyListProvider());
      const data = JSON.parse(res as any);
      setCookie(CookieKey.UserId, data._id.$oid);
      setCookie(CookieKey.JwtAuthToken, data._id.$oid);
      setIdGlobal(data._id.$oid);
      setCheckoutOrderId((orderId || 0) + 1);
      window.scrollTo(0, 0);
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = (data: Provider) => {
    data = {
      cnpj: data?.cnpj?.replace(/\D/g, ""),
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };

    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">Dados do prestador</h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] min-w-[300px] w-full">
            <Input
              label="Email"
              name="email"
              type="email"
              id="email"
              errors={errors.email}
              register={{
                ...register("email", { required: "Email é obrigatório" }),
              }}
            />
          </div>

          <div className="max-w-[500px] w-full">
            <div className="flex flex-col !font-sans gap-1 mb-2 max-w-[500px] min-w-[300px] w-full">
              <Input
                label="Senha"
                name="password"
                type="password"
                id="password"
                errors={errors.password}
                register={{
                  ...register("password", {
                    required: "Senha é obrigatória",
                  }),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="CNPJ"
              name="cnpj"
              type="text"
              id="cnpj"
              placeholder="00.000.000/0000-00"
              errors={errors.cnpj}
              register={{
                ...register("cnpj", {
                  required: "cnpj é obrigatório",
                  minLength: {
                    value: 14,
                    message: "cnpj deve ter 11 dígitos",
                  },
                  onChange: (e) => {
                    setValue("cnpj", formatToCnpj(e.target.value));
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
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-black border border-secundary  text-lg font-medium disabled:opacity-50 "
        >
          {isLoading ? "Carregando" : "Continuar"}
        </button>
      </div>
    </form>
  );
}

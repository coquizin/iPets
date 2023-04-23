import Input from "@/components/input/input";
import { Address } from "@/entities/Address/address";
import { queryClient } from "@/libs/react-query";
import { useGetAddressByCep } from "@/services/address";
import { keyListConsumer } from "@/services/consumers/keys";
import { useUpdateProvider } from "@/services/providers";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import { useCreateId } from "@/stores/useId";
import {
  formatToCEP,
  formatToNumber,
  formatToOnlyLetters,
} from "@/utils/helpers/Masks";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function DadosEndereco() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<Address>({
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
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = (data: Address) => {
    mutate({
      address: { ...data },
      _id: idProvider,
    });
  };

  useGetAddressByCep(formatToNumber(watch("postcode")), {
    onSuccess: (data) => {
      setValue("street", data?.logradouro);
      setValue("district", data?.bairro);
      setValue("city", data?.localidade);
      setValue("uf", data?.uf);
      clearErrors(["street", "district", "city", "uf"]);
    },
    refetchOnMount: true,
    enabled: Boolean(formatToNumber(watch("postcode")).length === 8),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">
          Endereço do prestador
        </h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="CEP"
              name="postcode"
              type="text"
              id="postcode"
              placeholder="00000-000"
              errors={errors.postcode}
              register={{
                ...register("postcode", {
                  required: "CEP é obrigatório",
                  onChange: (e) => {
                    setValue("postcode", formatToCEP(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Logradouro"
              name="street"
              type="text"
              id="street"
              errors={errors.street}
              register={{
                ...register("street", {
                  required: "Logradouro é obrigatório",
                  onChange: (e) => {
                    setValue("street", formatToOnlyLetters(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Número"
              name="number"
              type="text"
              id="number"
              errors={errors.number}
              register={{
                ...register("number", {
                  required: "Número é obrigatório",
                  onChange: (e) => {
                    setValue("number", formatToNumber(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Complemento"
              name="complement"
              type="text"
              id="complement"
              errors={errors.complement}
              register={{
                ...register("complement"),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Bairro"
              name="district"
              type="text"
              id="district"
              errors={errors.district}
              register={{
                ...register("district", {
                  required: "Bairro é obrigatório",
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Cidade"
              name="city"
              type="text"
              id="city"
              errors={errors.city}
              register={{
                ...register("city", {
                  required: "Cidade é obrigatório",
                  onChange: (e) => {
                    setValue("city", formatToOnlyLetters(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Estado"
              name="uf"
              type="text"
              placeholder="UF"
              id="uf"
              errors={errors.uf}
              register={{
                ...register("uf", {
                  required: "Estado é obrigatório",
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

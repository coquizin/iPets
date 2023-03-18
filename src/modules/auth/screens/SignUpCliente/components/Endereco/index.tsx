import Input from "@/components/input/input";
import { Address } from "@/entities/Address/address";
import { useGetAddressByCep } from "@/services/address";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import {
  formatToCEP,
  formatToNumber,
  formatToOnlyLetters,
} from "@/utils/helpers/Masks";
import { useForm } from "react-hook-form";

export default function DadosEndereco() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Address>({
    defaultValues: {},
  });

  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );

  const onSubmit = (data: Address) => {
    setCheckoutOrderId((orderId || 0) + 1);
    window.scrollTo(0, 0);
  };

  useGetAddressByCep(formatToNumber(watch("zip")), {
    onSuccess: (data) => {
      setValue("street", data?.logradouro);
      setValue("district", data?.bairro);
      setValue("city", data?.localidade);
      setValue("uf", data?.uf);
    },
    refetchOnMount: true,
    enabled: Boolean(formatToNumber(watch("zip")).length === 8),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">Endereço do cliente</h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="País"
              name="country"
              type="text"
              id="country"
              errors={errors.country}
              register={{
                ...register("country", {
                  required: "País é obrigatório",
                  onChange: (e) => {
                    setValue("country", formatToOnlyLetters(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="CEP"
              name="zip"
              type="text"
              id="zip"
              placeholder="00000-000"
              errors={errors.zip}
              register={{
                ...register("zip", {
                  required: "CEP é obrigatório",
                  onChange: (e) => {
                    setValue("zip", formatToCEP(e.target.value));
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
          Confirmar
        </button>
      </div>
    </form>
  );
}

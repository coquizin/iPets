import Input from "@/components/input/input";
import { Pets } from "@/entities/Pets/pets";
import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import { formatToNumber, formatToOnlyLetters } from "@/utils/helpers/Masks";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function DadosPets() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Pets>({
    defaultValues: {},
  });

  const orderId = useCreateAccountScreen((state) => state.data.orderId);
  const setCheckoutOrderId = useCreateAccountScreen(
    (state) => state.setCheckoutOrderId
  );

  const onSubmit = (data: Pets) => {
    setCheckoutOrderId((orderId || 0) + 1);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-medium mb-2 text-[1.25rem]">Endereço do cliente</h1>
        <div className="rounded-[3px] p-5 space-y-4 bg-[#F5F5F5]">
          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Nome"
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

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Espécie"
              name="type"
              type="text"
              id="type"
              errors={errors.type}
              register={{
                ...register("type", {
                  required: "Espécie é obrigatório",
                  onChange: (e) => {
                    setValue("type", formatToOnlyLetters(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[500px] w-full">
            <Input
              label="Raça"
              name="raça"
              type="text"
              id="raça"
              errors={errors.raça}
              register={{
                ...register("raça", {
                  required: "Raça é obrigatório",
                  onChange: (e) => {
                    setValue("raça", formatToOnlyLetters(e.target.value));
                  },
                }),
              }}
            />
          </div>

          <div className="flex items-end gap-2">
            <div className="flex flex-col gap-1 max-w-[150px] w-full">
              <Input
                label="Idade"
                name="number"
                type="text"
                id="number"
                errors={errors.age}
                register={{
                  ...register("age", {
                    required: "Número é obrigatório",
                    onChange: (e) => {
                      setValue("age", formatToNumber(e.target.value));
                    },
                  }),
                }}
              />
            </div>
            <span className="mb-6 text-base font-medium text-secundary">
              Anos
            </span>
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
          type="button"
          className=" max-w-[115px] w-full flex items-center justify-center h-[40px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-medium "
          onClick={() => {
            router.push("/");
          }}
        >
          Confirmar
        </button>
      </div>
    </form>
  );
}

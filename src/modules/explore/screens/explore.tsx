import { useForm } from "react-hook-form";
import { Star } from "@styled-icons/boxicons-solid";
import { SearchAlt } from "@styled-icons/boxicons-regular";

export default function ExploreScreen() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center px-6 bg-[#F5F5F5]">
        <div className="w-full mt-5 mb-10 max-w-content-wrapper-max">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <label
              className="text-2xl  text-center mt-6 text-[#0E1428]"
              htmlFor=""
            >
              Pesquise:
            </label>
            <input
              className="w-full max-h-[62px] rounded-md text-base duration-300 p-5 pr-14 border-[2px] border-solid focus-visible:outline-none"
              type="text"
              placeholder="Digite aqui"
              {...register("search")}
            />
            <button className="absolute w-10 h-10 rounded-full hover:bg-slate-300 right-3 bottom-[11px]">
              <SearchAlt
                type="submit"
                className=" cursor-pointer w-6 h-6 text-[#0E1428] "
              />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center px-6">
        <div className="w-full min-h-[70vh] mt-5 mb-10 max-w-content-wrapper-max">
          <h2 className="text-2xl text-start mb-6 text-[#0E1428]">
            Resultados encontrados:
          </h2>
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="flex w-full duration-300 bg-white animate-pulse rounded-md ease-linear min-h-[130px] max-h-[140px] cursor-pointer hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,.4)]"
              >
                <div className="flex rounded-l-md min-w-[130px] justify-center">
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="min-w-full min-h-full bg-gray-400 rounded-l-md" />
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full p-4 text-start">
                  <div>
                    <p className="w-full h-4 mb-2 text-lg font-medium bg-gray-400 rounded-md " />
                    <div className="flex flex-col gap-1">
                      <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                      <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                      <p className="w-full h-3 text-sm bg-gray-400 rounded-md " />
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div>
                      <p className="w-[65px] h-4 bg-gray-400   rounded-md" />
                    </div>
                    <div className="flex items-end gap-1 text-amber-500">
                      <Star className="w-4 h-4 text-amber-500 " />
                      <span className="font-sans text-xs font-medium">...</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <span className="text-xl text-start mb-6 text-[#0E1428]">
              Erro ao carregar sua pesquisa :(
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}

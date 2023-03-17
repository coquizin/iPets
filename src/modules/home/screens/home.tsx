import Image from "next/image";
import BestWorkers from "../components/bestWorkers";

export default function HomeScreen() {
  const array = [1, 2, 3, 4];

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-10 pt-7">
        <h1 className="md:text-4xl text-3xl md:text-[2.5rem] my-6 max-w-[650px] font-Oswald font-medium text-center text-[#0E1428] uppercase">
          Encontre os melhores profissionais para seus animais
        </h1>
        <span className="md:text-lg">O que você precisa está aqui.</span>
      </div>
      <div className="flex flex-col bg-[#D9D9D9] items-center py-10 ">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="md:text-4xl text-2xl  max-w-[800px] font-medium text-center mt-6 text-[#0E1428] ">
            Escolha a opção que deseja
          </h1>
          <span className="md:text-lg">
            Não encontrou o que queria?{" "}
            <a className="text-[#D95D39]" href="">
              clique aqui.
            </a>
          </span>
        </div>
        <div className="w-full max-w-content-wrapper-max">
          <div className="grid grid-flow-col mb-10 justify-items-center">
            {array.map((item) => (
              <div
                key={item}
                className="bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl duration-300 max-w-[280px] w-full"
              >
                <div className="w-full max-h-[236px] ">
                  <Image
                    src="/assets/images/dogWalker.jpg"
                    alt="dog walker"
                    layout="intrinsic"
                    width={280}
                    height={236}
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 text-end">
                  <h3 className="text-lg font-medium">
                    solicite um dog walker{" "}
                  </h3>
                  <p className="text-xs">
                    profissional que oferece o serviço de passear com seu pet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0E1428] flex flex-col items-center pb-32 px-6">
        <div className="w-full max-w-content-wrapper-max">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-16 md:flex-row md:items-end mt-28">
            <h3 className="text-4xl font-medium text-white">
              Top profissionais
            </h3>
            <span className="text-[#CCC6C6] cursor-pointer">ver mais</span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-0 md:flex-row md:justify-between">
            {array.map((item) => (
              <BestWorkers key={item} />
            ))}
          </div>
        </div>
        <div className="w-full max-w-content-wrapper-max">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-16 md:flex-row md:items-end mt-28">
            <h3 className="text-4xl font-medium text-white">
              Top veterinários
            </h3>
            <span className="text-[#CCC6C6] cursor-pointer">ver mais</span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-0 md:flex-row md:justify-between">
            {array.map((item) => (
              <BestWorkers key={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

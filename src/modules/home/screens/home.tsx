import Image from "next/image";
import BestWorkers from "../components/bestWorkers";
import { Star } from "@styled-icons/boxicons-solid";
import { StyledDiv } from "./styles";

export default function HomeScreen() {
  const array = [
    1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  const array2 = [1, 2, 3, 4, 5, 6, 8, 9];

  return (
    <>
      <StyledDiv className="flex flex-col items-center justify-center px-6 py-10 pt-7">
        <h1 className="md:text-4xl text-3xl md:text-[2.5rem] my-6 max-w-[650px] py-10 font-Oswald font-medium text-center text-[#0E1428] uppercase">
          Encontre os melhores profissionais para seus animais
        </h1>
        <span className="md:text-lg">O que você precisa está aqui.</span>
      </StyledDiv>
      <div className="flex flex-col items-center py-10 ">
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
        <div className="flex justify-center w-full px-6">
          <div className="w-full max-w-content-wrapper-max">
            <div className="grid gap-5 mb-10 xl:grid-cols-auto-1818px md:grid-cols-auto-768px grid-cols-auto-repeat justify-items-center">
              {array.map((item) => (
                <div
                  key={item}
                  className="flex w-full duration-300 bg-white rounded-md ease-linear min-h-[130px] max-h-[140px] cursor-pointer hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,.4)]"
                >
                  <div className="flex rounded-l-md min-w-[130px] justify-center">
                    <Image
                      src="/assets/images/dogWalker.jpg"
                      alt="dog walker"
                      className="min-h-[130px] rounded-l-md"
                      width={140}
                      height={140}
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 text-start">
                    <div>
                      <h3 className="text-lg font-medium">Dog Walker </h3>
                      <p className="text-sm ">
                        profissional que oferece o serviço de passear com seu
                        pet.
                      </p>
                    </div>
                    <div className="flex items-end gap-1 text-amber-500">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="font-sans text-xs font-medium">4.6</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <div className="grid gap-2 grid-cols-auto-repeat justify-items-center">
            {array2.map((item) => (
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
          <div className="grid gap-2 grid-cols-auto-repeat justify-items-center">
            {array2.map((item) => (
              <BestWorkers key={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

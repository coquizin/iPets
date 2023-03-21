import Image from "next/image";
import { Verified } from "@styled-icons/material";

const BestWorkers = () => {
  return (
    <div className="flex gap-5 border items-center hover:border-[#7a7977] border-transparent max-w-fit cursor-default p-2 rounded-md px-4 hover:shadow-md">
      <div>
        <Image
          src={"/assets/images/bestPro.jpg"}
          alt="Icon"
          className="rounded-full"
          objectFit="cover"
          height={90}
          width={90}
        />
      </div>
      <div className="flex flex-col gap-1 text-start">
        <p className="text-lg font-medium text-white">João Kleber</p>
        <span className="text-[#7B9E89]">@jkleber</span>
        <span className="text-[#CCC6C6]">543 serviços</span>
      </div>
      <div className="flex items-center ">
        <Verified className="w-8 h-8 text-green-600" />
      </div>
    </div>
  );
};

export default BestWorkers;

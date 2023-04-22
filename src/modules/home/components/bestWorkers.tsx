import Image from "next/image";
import { Verified } from "@styled-icons/material";
import { Provider } from "@/entities/Provider/provider";
import Link from "next/link";

const BestWorkers = (data: Provider) => {
  return (
    <Link href={`/servidores/${data._id}`}>
      <a>
        <div className="flex gap-5 border items-center cursor-pointer hover:border-[#7a7977] border-transparent max-w-fit  p-2 rounded-md px-4 hover:shadow-md">
          <div>
            <Image
              src={`data:image/jpg;base64, ${data?.avatar}`}
              alt="Icon"
              className="rounded-full"
              objectFit="cover"
              height={90}
              width={90}
            />
          </div>
          <div className="flex flex-col gap-1 text-start">
            <p className="text-lg font-medium text-white">
              {data?.name.split(" ")[0]}
            </p>
            <span className="text-[#7B9E89]">@{data?.name.split(" ")[0]}</span>
            <span className="text-[#CCC6C6]">543 serviços</span>
          </div>
          <div className="flex items-center ">
            <Verified className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BestWorkers;

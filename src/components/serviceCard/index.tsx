import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="fixed flex gap-5 top-1/2 left-1/2 max-w-content-wrapper-max -translate-x-1/2 -translate-y-1/2 z-[80] p-4 w-11/12  h-11/12 h-[800px] max-h-[500px] bg-white rounded-2xl shadow-lg">
      <div className="">
        <Image
          src={service.icon}
          alt={service.title}
          width={468}
          height={468}
          objectFit="cover"
          className="rounded-md min-w-[468px] min-h-[468px]"
        />
      </div>
      <div className="flex flex-col items-center max-w-[675px] ">
        <div className="mb-5 text-2xl">
          <span>{service.title}</span>
        </div>
        <div className="self-start">{service.description}</div>

        <div className="flex items-end justify-end w-full h-full">
          <button className="px-4 py-2 mt-4 text-white rounded-md bg-primary">
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

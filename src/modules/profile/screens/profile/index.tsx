import Image from "next/image";

const ProfileScreen = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="bg-[#F5F5F5] max-w-content-wrapper-max w-full mt-10 rounded-[3px] p-6 space-y-4">
        <div>
          <div className="flex flex-col items-center w-fit">
            <div className="bg-black flex rounded-3xl md:max-w-[180px] md:min-h-[180px] max-w-[120px] min-h-[120px]">
              <Image
                src="/assets/images/profile.jpg"
                alt="Picture of the author"
                width={180}
                height={180}
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>

            <button className="bg-white text-[#FF5A5F] font-bold text-sm rounded-[3px] px-4 py-2 mt-4">
              Alterar foto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

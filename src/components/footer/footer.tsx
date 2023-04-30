import Image from "next/image";

export default function Footer() {
  const linksFollow = [
    "Instagram",
    "TikTok",
    "Twitter",
    "Facebook",
    "Linkedin",
    "Youtube",
  ];

  const lorenIpson = ["loren", "ipson", "loren", "ipson", "loren", "ipson"];

  return (
    <footer className="flex flex-col items-center bg-[#161616] text-white">
      <div className="flex flex-col justify-end w-full h-full px-6 max-w-content-wrapper-max">
        <div className="flex gap-8 md:gap-0 md:flex-row flex-col justify-between min-h-[424px] py-12">
          <div className="flex items-center justify-center min-h-full ">
            <Image
              alt="logo iPets"
              src="/assets/images/LogoPets.svg"
              width={90}
              className="min-w-max"
              height={90}
            />
          </div>
          <div className="flex items-center justify-center gap-20">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Links úteis
              </p>
              {lorenIpson.map((link, idx) => (
                <span
                  key={idx}
                  className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer"
                >
                  loren ipson
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Siga iPets
              </p>
              {linksFollow.map((link) => (
                <span
                  key={link}
                  className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
            <div className="flex-col hidden gap-2 text-center md:flex">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Opções do site
              </p>
              {lorenIpson.map((link, idx) => (
                <span
                  key={idx}
                  className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer"
                >
                  loren ipson
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center md:max-w-[200px] ">
            <p className="font-Oswald font-medium text-[#F4EFEA]/[.9] text-xl md:text-2xl text-center">
              Dê uma vida mais divertida e saudável ao seu querido animal.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-9 text-[#F4EFEA]/[.9]  border-t border-[#F4EFEA]/[.9]">
        <div className="flex items-center justify-center w-full px-6 md:justify-between max-w-content-wrapper-max">
          <p className="cursor-default">
            Copyright © 2023 iPets. All Rights Reserved.
          </p>
          <p className="hidden cursor-pointer md:block">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

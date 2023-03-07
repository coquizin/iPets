import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Default({ children }: Props) {
  return (
    <>
      <div className="bg-[rgb(255,255,255)] text-black font-Jost scrollbar-thin h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden ">
        <div>{children}</div>
      </div>
    </>
  );
}

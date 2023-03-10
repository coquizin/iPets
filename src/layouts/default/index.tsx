import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Default({ children }: Props) {
  return (
    <>
      <div className="bg-[rgb(255,255,255)] text-black font-Jost scrollbar-thin z-0">
        <div>{children}</div>
      </div>
    </>
  );
}

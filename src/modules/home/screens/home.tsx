import Image from "next/image";

export default function HomeScreen() {
  return (
    <>
      <div className="flex justify-center h-screen bg-no-repeat bg-cover bg-[center] bg-[url('/assets/images/heroBackGround.jpg')] "></div>
      <div className="flex justify-center h-screen">
        <h1 className="mt-5 text-5xl font-semibold">Bem VINDOOS!</h1>
      </div>
    </>
  );
}

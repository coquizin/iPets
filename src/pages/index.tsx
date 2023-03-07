import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HomeScreen from "@/modules/home/screens/home";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>iPets</title>
        <meta name="theme-color" content="rgb(255, 255, 255)" />
      </Head>
      <Header />
      <div className="bg-white">
        <HomeScreen />
      </div>
      <Footer />
    </>
  );
}

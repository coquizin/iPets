import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HomeScreen from "@/modules/home/screens/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>iPets</title>
      </Head>
      <HomeScreen />
    </>
  );
}

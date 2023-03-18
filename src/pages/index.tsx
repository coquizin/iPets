import Head from "next/head";
import styled from "styled-components";
import HomeScreen from "@/modules/home/screens/home";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT_FULL, NAVBAR_HEIGHT } from "@/layouts/constants";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <HomeScreen />
      </Cointainer>
      <Footer />
    </>
  );
}

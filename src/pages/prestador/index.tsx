import Head from "next/head";
import styled from "styled-components";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT_FULL, NAVBAR_HEIGHT } from "@/layouts/constants";
import HomeProviderScreen from "@/modules/homeProvider/screens/homeProvider";
import HeaderPrestador from "@/components/headerPrestador/headerPrestador";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

export default function HomePrestador() {
  return (
    <>
      <Head>
        <title>Prestador | iPets</title>
      </Head>
      <HeaderPrestador />
      <Cointainer>
        <HomeProviderScreen />
      </Cointainer>
      <Footer />
    </>
  );
}

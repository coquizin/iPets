import styled from "styled-components";
import Head from "next/head";
import CarteiraScreen from "@/modules/carteira/screens/carteira";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_FULL } from "@/layouts/constants";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

const Carteira = () => {
  return (
    <>
      <Head>
        <title>Carteira | iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <CarteiraScreen />
      </Cointainer>
      <Footer />
    </>
  );
};

export default Carteira;

import Head from "next/head";
import styled from "styled-components";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT_FULL, NAVBAR_HEIGHT } from "@/layouts/constants";
import MeusPedidosScreen from "@/modules/meusPedidos/screens/meusPedidos";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

export default function MeusPedidos() {
  return (
    <>
      <Head>
        <title>Meus Pedidos | iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <MeusPedidosScreen />
      </Cointainer>
      <Footer />
    </>
  );
}

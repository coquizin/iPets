import styled from "styled-components";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_FULL } from "@/layouts/constants";
import { useRouter } from "next/router";
import LojaScreen from "@/modules/loja/screens/loja";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

const Anunciante = () => {
  const router = useRouter();
  const namepage = router.query.slug as string;
  return (
    <>
      <Head>
        <title> {namepage && namepage.replace("-", " ")} | iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <LojaScreen />
      </Cointainer>
      <Footer />
    </>
  );
};

export default Anunciante;

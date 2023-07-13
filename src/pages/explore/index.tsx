import styled from "styled-components";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_FULL } from "@/layouts/constants";
import ExploreScreen from "@/modules/explore/screens/explore";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore | iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <ExploreScreen />
      </Cointainer>
      <Footer />
    </>
  );
};

export default Explore;

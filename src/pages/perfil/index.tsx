import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ProfileScreen from "@/modules/profile/screens/profile";
import styled from "styled-components";
import Head from "next/head";
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_FULL } from "@/layouts/constants";

const Cointainer = styled.div`
  background-color: white;
  padding-top: ${NAVBAR_HEIGHT};

  @media (min-width: 768px) {
    padding-top: ${NAVBAR_HEIGHT_FULL};
  } ;
`;

const Profile = () => {
  return (
    <>
      <Head>
        <title>Perfil | iPets</title>
      </Head>
      <Header />
      <Cointainer>
        <ProfileScreen />
      </Cointainer>
      <Footer />
    </>
  );
};

export default Profile;

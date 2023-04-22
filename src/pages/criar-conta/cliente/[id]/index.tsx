import { ROUTES } from "@/configs/routes";
import SignUpClienteScreen from "@/modules/auth/screens/SignUpCliente";
import { CookieKey, readCookie } from "@/utils/cookies";
import { GetServerSideProps } from "next";
import Head from "next/head";

const SignUpCliente = () => {
  return (
    <>
      <Head>
        <title>Criar Conta | iPets</title>
      </Head>
      <SignUpClienteScreen />
    </>
  );
};

export default SignUpCliente;

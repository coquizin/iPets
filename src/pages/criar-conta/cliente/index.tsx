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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const serverCookies = context.req.headers.cookie ?? ``;
  const token = readCookie(CookieKey.JwtAuthToken, serverCookies);

  if (token && token.length > 0) {
    return {
      redirect: {
        destination: ROUTES.PRIVATE.ROOT(),
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default SignUpCliente;

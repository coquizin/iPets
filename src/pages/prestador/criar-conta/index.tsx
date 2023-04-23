import { ROUTES } from "@/configs/routes";
import SignUpScreen from "@/modules/auth/screens/SignUp";
import SignUpPrestadorScreen from "@/modules/auth/screens/SignUpPrestador";
import { CookieKey, readCookie } from "@/utils/cookies";
import { GetServerSideProps } from "next";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Criar Conta | iPets</title>
      </Head>
      <SignUpPrestadorScreen />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const serverCookies = context.req.headers.cookie ?? ``;
//   const token = readCookie(CookieKey.JwtAuthToken, serverCookies);

//   if (token && token.length > 0) {
//     return {
//       redirect: {
//         destination: ROUTES.PRIVATE.ROOT(),
//         permanent: false,
//       },
//     };
//   }

//   return { props: {} };
// };

export default SignUp;

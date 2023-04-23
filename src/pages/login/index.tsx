import { ROUTES } from "@/configs/routes";
import LoginScreen from "@/modules/auth/screens/Login";
import { CookieKey, readCookie } from "@/utils/cookies";
import { GetServerSideProps } from "next";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Entrar | iPets</title>
      </Head>
      <LoginScreen />
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

export default Login;

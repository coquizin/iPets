import LoginScreen from "@/modules/auth/screens/Login";
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

export default Login;

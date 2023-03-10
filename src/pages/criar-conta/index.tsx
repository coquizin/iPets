import SignInScreen from "@/modules/auth/screens/SignIn";
import Head from "next/head";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Criar Conta | iPets</title>
      </Head>
      <SignInScreen />
    </>
  );
};

export default SignIn;

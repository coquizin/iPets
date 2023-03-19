import SignUpScreen from "@/modules/auth/screens/SignUp";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Criar Conta | iPets</title>
      </Head>
      <SignUpScreen />
    </>
  );
};

export default SignUp;

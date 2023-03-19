import Input from "@/components/input/input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignInProps } from "./types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpScreen() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: SignInProps) => {
    try {
      const res = await fetch("http://localhost:8080/saveUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const responseEnv = await res.json();

      if (responseEnv.erro) {
        console.log(responseEnv.erro);
      } else {
        route.push("criar-conta/cliente");
        console.log("sucesso");
      }
    } catch (err) {
      console.log("Erro");
    }

    console.log(data);
  };

  return (
    <div className="flex text-black">
      <div className="bg-[url('/assets/images/signInPic.jpg')] bg-no-repeat bg-cover bg-[center] xl:max-w-[60%] md:max-w-[50%] hidden md:block w-full" />
      <div className="w-full xl:max-w-[40%] md:max-w-[50%] min-h-screen bg-white px-5 py-20 flex flex-col justify-center items-center">
        <div className="mb-5 cursor-pointer">
          <Link href={"/"} passHref>
            <Image
              alt="logo iPets"
              src="/assets/images/LogoPets.svg"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="flex flex-col items-center w-full gap-1">
          <h1 className="text-3xl font-semibold md:text-4xl font-Jost text-primary">
            Bem vindo ao iPets.
          </h1>
          <p className="text-sm md:text-base">
            já possui uma conta?{" "}
            <Link href={"/login"}>
              <a className="font-medium text-primary">entre aqui.</a>
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
          <div className="flex flex-col items-center w-full mt-8 space-y-4">
            <div className="flex flex-col gap-1 max-w-[500px] min-w-[300px] w-full">
              <Input
                label="Email"
                name="email"
                type="email"
                id="email"
                errors={errors.email}
                register={{
                  ...register("email", { required: "Email é obrigatório" }),
                }}
              />
            </div>

            <div className="max-w-[500px] w-full">
              <div className="flex flex-col !font-sans gap-1 mb-2 max-w-[500px] min-w-[300px] w-full">
                <Input
                  label="Senha"
                  name="password"
                  type="password"
                  id="password"
                  errors={errors.password}
                  register={{
                    ...register("password", {
                      required: "Senha é obrigatória",
                    }),
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-5">
              <button
                className="md:max-w-[400px] max-w-[300px] w-full flex items-center justify-center h-[62px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-semibold uppercase"
                type="submit"
              >
                Criar
              </button>
              <button
                type="button"
                className="md:max-w-[400px] max-w-[300px] w-full relative flex items-center justify-center h-[62px] border-2 border-solid border-[#C1CCD6] rounded-md text-black/[54%] text-lg font-semibold"
              >
                <div className="absolute left-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                </div>
                Sign in with google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default function SignUpScreen() {
//   const route = useRouter();
//   const {
//     register,
//     formState: { errors },
//   } = useForm<SignInProps>({
//     defaultValues: { email: "", password: "" },
//   });

//   const [dataForm, setDataForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [response, setResponse] = useState({
//     type: "",
//     mensagem: "",
//   });

//   const onChangeInput = (e) =>
//     setDataForm({ ...dataForm, [e.target.name]: e.target.value });

//   const sendUser = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:8080/saveUser", {
//         method: "POST",
//         body: JSON.stringify(dataForm),
//         headers: { "Content-Type": "application/json" },
//       });

//       const responseEnv = await res.json();

//       if (responseEnv.erro) {
//         setResponse({
//           type: "error",
//           mensagem: responseEnv.mensagem,
//         });
//       } else {
//         route.push("criar-conta/cliente");
//         setResponse({
//           type: "success",
//           mensagem: responseEnv.mensagem,
//         });

//         setDataForm({
//           email: "",
//           password: "",
//         });
//       }
//     } catch (err) {
//       setResponse({
//         type: "error",
//         mensagem: "Erro: Tente mais tarde!",
//       });
//     }
//   };
//   return (
//     <div className="flex text-black">
//       <div className="bg-[url('/assets/images/signInPic.jpg')] bg-no-repeat bg-cover bg-[center] xl:max-w-[60%] md:max-w-[50%] hidden md:block w-full" />
//       <div className="w-full xl:max-w-[40%] md:max-w-[50%] min-h-screen bg-white px-5 py-20 flex flex-col justify-center items-center">
//         <div className="mb-5 cursor-pointer">
//           <Link href={"/"} passHref>
//             <Image
//               alt="logo iPets"
//               src="/assets/images/LogoPets.svg"
//               width={80}
//               height={80}
//             />
//           </Link>
//         </div>
//         <div className="flex flex-col items-center w-full gap-1">
//           <h1 className="text-3xl font-semibold md:text-4xl font-Jost text-primary">
//             Bem vindo ao iPets.
//           </h1>
//           <p className="text-sm md:text-base">
//             já possui uma conta?{" "}
//             <Link href={"/login"}>
//               <a className="font-medium text-primary">entre aqui.</a>
//             </Link>
//           </p>
//         </div>

//         <form onSubmit={sendUser} className="w-full ">
//           {response.type === "error" ? (
//             <p className="alert-danger">{response.mensagem}</p>
//           ) : (
//             ""
//           )}
//           {response.type === "success" ? (
//             <p className="alert-success">{response.mensagem}</p>
//           ) : (
//             ""
//           )}
//           <div className="flex flex-col items-center w-full mt-8 space-y-4">
//             <div className="flex flex-col gap-1 max-w-[500px] min-w-[300px] w-full">
//               {" "}
//               <label htmlFor="email">Email: </label>
//               <Input
//                 name="email"
//                 type="email"
//                 id="email"
//                 // label="Email"
//                 onChange={onChangeInput}
//                 setvalue={dataForm.email}
//                 // errors={errors.email}
//                 // register={{
//                 //   ...register("email", { required: "Email é obrigatório" }),
//                 // }}
//               />
//             </div>

//             <div className="max-w-[500px] w-full">
//               <div className="flex flex-col !font-sans gap-1 mb-2 max-w-[500px] min-w-[300px] w-full">
//                 <label htmlFor="password">Senha: </label>
//                 <input
//                   name="password"
//                   type="password"
//                   id="password"
//                   onChange={onChangeInput}
//                   value={dataForm.password}
//                   // errors={errors.password}
//                   // label="Senha"
//                   // register={{
//                   //   ...register("password", {
//                   //     required: "Senha é obrigatória",
//                   //   }),
//                   // }}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col items-center justify-center w-full gap-5">
//               <button
//                 className="md:max-w-[400px] max-w-[300px] w-full flex items-center justify-center h-[62px] rounded-md bg-[#E9B13F] hover:bg-[#d6a137] duration-150 mt-4 text-white text-lg font-semibold uppercase"
//                 type="submit"
//               >
//                 Criar
//               </button>
//               <button
//                 type="button"
//                 className="md:max-w-[400px] max-w-[300px] w-full relative flex items-center justify-center h-[62px] border-2 border-solid border-[#C1CCD6] rounded-md text-black/[54%] text-lg font-semibold"
//               >
//                 <div className="absolute left-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                   >
//                     <path
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                       fill="#4285F4"
//                     />
//                     <path
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                       fill="#34A853"
//                     />
//                     <path
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                       fill="#FBBC05"
//                     />
//                     <path
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                       fill="#EA4335"
//                     />
//                     <path d="M1 1h22v22H1z" fill="none" />
//                   </svg>
//                 </div>
//                 Sign in with google
//               </button>
//             </div>
//           </div>
//         </form>
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//         <script src="custom.js"></script>
//       </div>
//     </div>
//   );
// }

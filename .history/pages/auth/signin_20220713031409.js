import { getProviders, signIn } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div className=" flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <p className="font-xs italic">
          This is not a Real App it is Built for Education Purposes only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className=" p-3 bg-blue-500  rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign In With {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;

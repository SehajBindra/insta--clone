import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function signIn({ providers }) {
  return (
    <>
      <Header />

      <div>
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />


         <p className=" text-xs">This is not a Real App it is Built for Education Purposes only</p>


      <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className=" p-3 bg-blue-500  rounded-lg text-white" onClick={() => SignIntoProvider(provider.id)}>
            Sign In With {provider.name}
          </button>
        </div>
        
      ))}
      </div>
      </div>

      
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;

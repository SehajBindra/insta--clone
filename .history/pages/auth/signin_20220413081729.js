import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";


function signIn({ providers }) {
  return (
      <>
      <Header />
      {Object.values(providers).map((provider) => (
     <div key={provider.name}>
      <button onClick={() => SignIntoProvider(provider.id)} >
        sign in wth {provider.name}
      </button>
    </div>
    ))}
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

import { getProviders, SessionProvider, signIn } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Header />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {SessionProvider}
          </button>
        </div>
      ))}
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

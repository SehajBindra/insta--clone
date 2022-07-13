import { getProviders, signIn } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Header />

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
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

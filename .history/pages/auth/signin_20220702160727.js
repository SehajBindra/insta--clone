import { getProviders, signIn } from "next-auth/react";
import React from "react";
import { getCsrfToken } from "next-auth/react";

import Header from "../../components/Header";

function SignIn({ providers, csrfToken }) {
  const obj = undefined;

  if (obj) {
    const keys = Object.keys(obj);
  } else {
    // 👇️ this runs
    console.log("⛔️ Object is falsy");
  }

  return (
    <>
      <Header />

      <div className=" flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <p className="font-xs italic">
          This is not a Real App it is Built for Education Purposes only
        </p>

        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email address
            <input type="email" id="email" name="email" />
          </label>
          <button type="submit">Sign in with Email</button>
        </form>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
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
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      providers: null,
      csrfToken,
    },
  };
}

export default SignIn;

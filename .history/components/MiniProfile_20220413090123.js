import { signOut, useSession } from "next-auth/react";
import React from "react";

function MiniProfile() {
  const {data: session  }  = useSession();

  console.log( session);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] "
        src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"
        alt=""
      />

      <div className="flex-1 mx-4">
          <h2 className=" font-semibold ">sehaj_.b18</h2>
          <h3 className=" text-sm text-gray-400">Sehajbindra</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">
          Sign out
      </button>
    </div>
  );
}

export default MiniProfile;

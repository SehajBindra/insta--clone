import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between">
      <img
        className="w-16 h-16 rounded-full border p-[2px] "
        src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"
        alt=""
      />

      <div>
          <h2>sehaj_.b18</h2>
          <h3>Welcome to Instagram</h3>
      </div>
    </div>
  );
}

export default MiniProfile;

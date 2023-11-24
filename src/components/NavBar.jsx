import React from "react";

export const NavBar = () => {
  return (
    <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3364/3364355.png"
        alt=""
        className="w-20"
      />
      <h1 className="text-4xl italic font-bold">Movie App</h1>
    </nav>
  );
};

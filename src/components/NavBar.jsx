import React from "react";

export const NavBar = () => {
  return (
    // simple navBAr
    <div className="w-full h-[20vh]">
      <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3364/3364355.png"
          alt=""
          className="w-20"
        />
        <h1 className="text-4xl sm:text-6xl italic font-bold">Marvel World</h1>
      </nav>
    </div>
  );
};

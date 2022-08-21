import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div className="text-red-600 font-bold text-3xl"> NETFLIX</div>
      <div className="">
        <button className="text-white cursor-pointer pr-4"> Sign In</button>
        <button className="bg-red-600 px-6 py-2 text-white rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

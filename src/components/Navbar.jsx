import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div className="text-red-600 font-bold text-3xl hover:text-red-700 cursor-pointer">
        {" "}
        NETFLIX
      </div>
      <div className="">
        <button className="text-white cursor-pointer py-2 px-6 mr-3 hover:-translate-y-[0.10rem] hover:text-gray-200 ease-out ">
          Sign In
        </button>
        <button className="bg-red-600 px-6 py-2 text-white rounded cursor-pointer hover:-translate-y-[0.10rem] ease-out ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

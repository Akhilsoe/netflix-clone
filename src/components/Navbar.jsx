import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <div className="text-red-600 font-bold text-3xl hover:text-red-700 cursor-pointer">
          {" "}
          NETFLIX
        </div>
      </Link>
      {user?.email ? (
        <div className="">
          <Link to="/Account">
            <button className="text-white cursor-pointer py-2 px-6 mr-3 hover:-translate-y-[0.10rem] hover:text-gray-200 ease-out ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 text-white rounded cursor-pointer hover:-translate-y-[0.10rem] ease-out "
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/login">
            <button className="text-white cursor-pointer py-2 px-6 mr-3 hover:-translate-y-[0.10rem] hover:text-gray-200 ease-out ">
              Sign In
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-red-600 px-6 py-2 text-white rounded cursor-pointer hover:-translate-y-[0.10rem] ease-out ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

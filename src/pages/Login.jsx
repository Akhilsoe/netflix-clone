import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/9c08772c-0ce8-4813-b503-93859177a146/IN-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed  px-4 py-24 w-full z-50">
          <div className="max-w-[440px] h-[550px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-14">
              <h1 className="font-bold text-4xl">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 bg-gray-800 my-2 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 bg-gray-800 my-2 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 rounded py-3 my-6 font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    <input className="accent-white" type="checkbox" /> Remember
                    me
                  </p>
                  <p>Need help?</p>
                </div>
                <div className="py-6">
                  <p>
                    <span className="text-gray-400">New to Netflix?</span>

                    <Link to="/SignUp"> Sign Up.</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

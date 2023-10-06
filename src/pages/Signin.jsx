import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail } from "../helper/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import {  login } from "../redux/slices/authSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;

    setSigninDetails({
      ...signinDetails,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(signinDetails);

    if (!signinDetails.email || !signinDetails.password) {
      toast.error("Please fill all the details");
      return;
    }

    if (!isEmail(signinDetails.email)) {
      toast.error("Invalid email provided");
      return;
    }

  
    const response = await dispatch(login(signinDetails));
    console.log(response);

    if (response?.payload?.data) {
      navigate("/");
    }

    setSigninDetails({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className="flex flex-col justify-center items-center gap-3 rounded-lg text-white w-35 p-4 "
        >
          <h1 className="text-2xl text-center font-bold">Login Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              {" "}
              Email
            </label>
            <input
              type="email"
              value={signinDetails.email}
              onChange={handleUserInput}
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="background-transparent px-2 py-1 border"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              {" "}
              Pasword
            </label>
            <input
              type="password"
              name="password"
              value={signinDetails.password}
              onChange={handleUserInput}
              id="password"
              placeholder="Enter your password..."
              className="background-transparent px-2 py-1 border"
              required
            />
          </div>

          <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 px-[70px] font-semibold text-lg">
            Sign In
          </button>
          <p>
            Donot have an account ?
            <Link to="/signup" className="cursor-pointer text-blue-700">
              {" "}
              Signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signin;

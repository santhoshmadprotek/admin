import React, { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInsignUpValidation } from "../utils/signInSignUpValidation";
import Header from "./Header";
import { loginApiUrl } from "../utils/constants";
import { LoginData } from "../utils/userContext";

const Login = () => {
  const navigate = useNavigate();
  const PhoneNumber = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { setAccessToken } = useContext(LoginData);
  let inputData = {};

  
  

  // const loginApifn = async () => {
  //   try {
  //     const response = await postData(loginApiUrl, inputData);
  //     if (response?.is_admin === true) {
  //       console.log(response?.access_token);
  //       setAccessToken(response?.access_token);
  //       localStorage.setItem("accessToken", response?.access_token);
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const regexValidationFunction = () => {
    setErrorMessage(
      signInsignUpValidation(
        PhoneNumber?.current?.value,
        password?.current?.value
      )
    );
    inputData = {
      phone_number: PhoneNumber?.current?.value,
      password: password?.current?.value,
    };
    // loginApifn(inputData);
  };

  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {},
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen shadow-lg w-full">
        <form className="w-4/12 shadow-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col items-center my-4">
            <h1 className="font-serif font-bold text-2xl m-2 p-2">Sign In</h1>
            <input
              ref={PhoneNumber}
              type="input"
              placeholder="Enter Phone Number"
              className="m-2 p-2 rounded-lg w-10/12"
            />
            <input
              ref={password}
              type="password"
              placeholder="Enter User Password"
              className="m-2 p-2 rounded-lg w-10/12"
            />
            <p className="text-red-800">{errorMessage}</p>
            <button
              className="flex justify-center m-2 p-2 bg-blue-200 rounded-lg w-8/12 hover:bg-blue-400"
              onClick={regexValidationFunction}
            >
              Submit
            </button>
          </div>
          <p className="flex flex-col items-center my-4 text-blue-800 font-semibold cursor-pointer">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

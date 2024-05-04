import React, { useContext, useEffect } from "react";
import packersAndMoversLogo from "../utils/logo.jpg";
import { LoginData } from "../utils/userContext";
import { useNavigate } from "react-router-dom";
import appRouter from "./../App";

const Header = () => {
  const  {accessToken}  = useContext(LoginData);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Inside useEffect for checking access token");
    const accessToken = localStorage.getItem("accessToken");
    console.log("Access token:", accessToken);
    if (accessToken) {
      console.log("Navigating to dashboard");
      navigate({appRouter});
    }
    else {
      console.log("error")
    }
  }, []);
  return (
    <div className=" flex border-b-2 bg-white shadow-lg rounded-lg p-4 items-center">
      <a href="/">
        <img src={packersAndMoversLogo} alt="logo" />
      </a>
      <h1 className="font-serif font-bold text-2xl text-blue-900 mx-2">
        Active Packers & Movers
      </h1>
    </div>
  );
};

export default Header;

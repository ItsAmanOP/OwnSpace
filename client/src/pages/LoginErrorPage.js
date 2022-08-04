import React from "react";
import Error404 from "../Error404";
import Navbar from "../navbar";
import Footer from "../Footer";
import LoginError from "../LoginError";
import {Navigate } from "react-router-dom";

const LoginErrorPage = () => {
  return (
    <>
      
      <Navbar />
      <LoginError />
      <Footer />
      {/* <Navigate replace to={`/`} /> */}
    </>
  );
};

export default LoginErrorPage;

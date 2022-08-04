import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import LoginError from "../LoginError";

const LoginErrorPage = () => {
  return (
    <> 
      <Navbar />
      <LoginError />
      <Footer />
    </>
  );
};

export default LoginErrorPage;

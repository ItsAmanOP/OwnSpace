import React from "react";
import { NavLink } from "react-router-dom";

const LoginError = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Hi</h1>
          </div>
          <h2>PLEASE LOGIN OR CREATE A FREE ACCOUNT</h2>
          <p>
            YOU NEED TO BE LOGGED IN TO USE THE EDITOR.
          </p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default LoginError;

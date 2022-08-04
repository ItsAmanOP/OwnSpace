import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';



const NavbarEditor = () => {
  const [show, setShow] = useState(false);
    const { logout } = useAuth0();
  

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              OwnSpace
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  
                </li>
              </ul>
              <form class="d-flex">
                
                <button class="btn  btn-style btn-style-border" type="submit" onClick={() => logout({ returnTo: "http://localhost:3000"})}>
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavbarEditor;

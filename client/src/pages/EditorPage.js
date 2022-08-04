import React from "react";
import Error404 from "../Error404";
import Navbar from "../navbar";
import Footer from "../Footer";
import Editor from "../component/Editor.jsx"
import NavbarEditor from "../navbarEditor";
import { useAuth0 } from "@auth0/auth0-react";

const EditorPage = () => {
    // const { isAuthenticated }      = useAuth0();

    
  return (
//    isAuthenticated && (
    
    <>
      <NavbarEditor />
      <Editor />
      <Footer />
      
    </>
    // )
    
  );
    
};

export default EditorPage;
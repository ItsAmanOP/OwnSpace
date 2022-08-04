import React from "react";
import Footer from "../Footer";
import Editor from "../component/Editor.jsx"
import NavbarEditor from "../navbarEditor";

const EditorPage = () => {

  return (
    <>
      <NavbarEditor />
      <Editor />
      <Footer />
    </>
  );
    
};

export default EditorPage;

import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import EditorPageAuth from "./pages/EditorPageAuth";
import AddressRoute from "./pages/AddressRoute";

const App = () => {
  return (
    <>
    <Routes>
           
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<Contact/>}></Route>  
        <Route path='/Editor' element={<AddressRoute/>} />   
        <Route path='/Editor/:id' element={<EditorPageAuth />} />
        <Route path='/service' element={<Service/>}></Route>
        <Route element={<Error/>}></Route>
      
      </Routes>
    </>
  );
};

export default App;
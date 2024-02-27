
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Home";
import Make from "./Make";
import Update from "./Update";
import Read from "./Read";
import Dashboard from "./Dashboard";
import StuRegistration from "./StuRegistration";
import StuLogin from "./StuLogin";
import TeaRegistration from "./TeaRegistration";
import TeaLogin from "./TeaLogin";




function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/make" element={<Make/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/read/:id" element={<Read/>}/>
      <Route path="/sturegistration" element={<StuRegistration/>}/>
      <Route path="/stulogin" element={<StuLogin/>}/>
      <Route path="/teacherregistration" element={<TeaRegistration/>}/>
      <Route path="/tealogin" element={<TeaLogin/>}/>
 

    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

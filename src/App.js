
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
import Student from "./dashboard/Student";
import Teacher from "./dashboard/Teacher";
import Go from "./Go";
import StudentDetails from "./dashboard/StudentDetails";
import StudentProfile from "./dashboard/StudentProfile";
import NavBar from "./dashboard/NavBar";
import TestResult from "./dashboard/TestResult";
import TestForm from "./dashboard/TestForm";
import Admin from "./dashboard/Admin";
// import './dashboard/index.html'
import './Style.css'
import Admins from "./dashboard/Admins";
import Admint from "./dashboard/Admint";
import Feedback from "./dashboard/Feedback";
import Teacher1 from "./dashboard/Teacher1";
import TeacherDetails from "./dashboard/TeacherDetails";
import Contact from "./Contact";
import Observation from "./dashboard/Observation";
import Updatet from "./UpdateTeacher";
import ReadTeacher from "./ReadTeacher";
import CreateTeacher from "./CreateTeacher";






function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/make" element={<Make/>}/>
      <Route path="/createteacher" element={<CreateTeacher/>}/>

      <Route path="/updateteacher/:id" element={<Updatet/>}/>
      <Route path="/readteacher/:id" element={<ReadTeacher/>}/>


      <Route path="/update/:id" element={<Update/>}/>
     

      <Route path="/read/:id" element={<Read/>}/>
      <Route path="/sturegistration" element={<StuRegistration/>}/>
      <Route path="/stulogin" element={<StuLogin/>}/>
      <Route path="/teacherregistration" element={<TeaRegistration/>}/>
      <Route path="/tealogin" element={<TeaLogin/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/teacher/:TeacherId" element={<Teacher/>}/>
      <Route path="/admins" element={<Admins/>}/>
      <Route path="/admint" element={<Admint/>}/>

      <Route path="/contact" element={<Contact/>}/>
      <Route path="/observation/:studentId" element={<Observation/>}/>




      <Route path="/go" element={<Go/>}/>
      <Route path="/student-details/:studentId" element={<StudentDetails/>}/>
      <Route path="/feedback/:studentId" element={<Feedback/>}/>
      <Route path="/teacher-details" element={<TeacherDetails/>}/>

      
      <Route path="/student-profile/:studentId" element={<StudentProfile/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/test-form/:studentId" element={<TestForm/>}/>
      <Route path="/test-result/:studentId" element={<TestResult/>}/>
      <Route path="/teacher1" element={<Teacher1/>}/>







 

    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

import React from "react";
// import {Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./App.css";
import WelcomePage     from "./pages/WelcomePage";
import AddItemPage     from "./pages/AddItemPage";
import CommunityPage   from "./pages/CommunityPage";
import Borrow from "./pages/Borrow";
import SignUpPage     from "./pages/SignupPage";
import "bootstrap/dist/css/bootstrap.min.css";


export const pages = {
  WelcomePage: "WelcomePage",
  CommunityPage: "CommunityPage",
  AddItemPage: "AddItemPage",
  SignupPage : "SignupPage",
  Borrow : "BorrowItemPage"
};

function App(){
  return (
  <div>
  <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/borrowItem" element={<Borrow />} />  
        <Route path="/WelcomePage" element={<WelcomePage />} />
      </Routes>
  </Router>
  </div>
  );
}

export default App;


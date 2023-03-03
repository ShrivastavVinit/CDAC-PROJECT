import { Route, Routes } from "react-router-dom";
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import RegisterCandidate from "./Component/RegisterCandidate";
import Login from "./Component/Login";
import RegisterRecruiter from "./Component/RegisterRecruiter";
import Home from "./Component/Home";
import Help from "./Component/Help";
import FooterBar from "./Component/FooterBar";
import HeaderBar from "./Component/HeaderBar";
import EditCandidateProfile from "./Component/EditCandidateProfile";
import JobDisplay from "./Component/JobDisplay";
import EditRecruiterProfile from "./Component/EditRecruiterProfile";
import Contact from "./Component/Contact";
import Register from "./Component/Register";
import CandidateDashboard from "./Component/CandidateDashboard";
import CandidatesApplied from "./Component/CandidatesApplied";
import RecruiterDashboard from "./Component/RecruiterDashboard";
import JobPost from "./Component/JobPost";
import Profile from "./Component/Profile";
import CheckStatus from "./Component/CheckStatus";
import About from "./Component/About";


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/Profile/:id" element={<Profile />}></Route>
          <Route path="/checkStatus/:id" element={<CheckStatus />}></Route>
          <Route path="/RecruiterDashboard" element={<RecruiterDashboard />}></Route>
          <Route path="/JobPost" element={<JobPost />}></Route>
          <Route path="/Header" element={<HeaderBar></HeaderBar>}></Route>
          <Route path="/CandidateApplied/:jobid" element={<CandidatesApplied />}></Route>
          <Route path="/CandidateDashboard" element={<CandidateDashboard />}></Route>
          <Route path="/get/job" element={<JobDisplay></JobDisplay>}></Route>
          <Route path="/EditCandidate/:id" element={<EditCandidateProfile />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/EditRecruiter/:id" element={<EditRecruiterProfile />}></Route>
          <Route path="/RegisterCandidate" element={<RegisterCandidate />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/RegisterRecruiter" element={<RegisterRecruiter />}></Route>
          <Route path="/Help" element={<Help />}></Route>
        </Routes>
      </div>
      <FooterBar />
    </div>

  );
}

export default App;

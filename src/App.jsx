import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AllRequest from "./pages/AllRequest.jsx";
import MyRequest from "./pages/MyRequest.jsx";
import Profile from "./pages/Profile.jsx";
import RequestForm from "./pages/RequestForm.jsx";
import Signin from "./pages/Signin.jsx";
import BaseDetail from "./pages/BaseDetail.jsx";
import PBaseDetail from "./pages/PBaseDetail.jsx";
import AgencyDetail from "./pages/AgencyDetail.jsx";
import RequestDetail from "./pages/RequestDetails.jsx";
import EditBaseDetails from "./pages/EditBaseDetails.jsx";



import { useState } from "react";

function App() {
  // Login state (false = show Signin, true = show app)
  const [isLoggedIn, 
     setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handle login success
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/"); // Redirect to Home page after login
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Pass handleLogin to Signin so it can switch state after success
        <Signin onLogin={handleLogin} />
      ) : (
        <>
        <h3>lll</h3>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-requests" element={<MyRequest />} />
            <Route path="/all-requests" element={<AllRequest />} />
            <Route path="/bases/:id" element={<BaseDetail/>} />
            <Route path="/pbases/:id" element={<PBaseDetail/>} />
            <Route path="/agency/:id" element={<AgencyDetail/>} />
            <Route path="/requests/:id" element={<RequestDetail/>} />
            <Route path="/bases/:id/edit" element={<EditBaseDetails />} />
          </Routes>
          
        </>
      )}
    </div>
  );
}

export default App;
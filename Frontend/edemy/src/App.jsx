import { useState } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./App.css";
import Adlogin from './Pages/Adlogin'
import Slideshow from "./Pages/Slideshow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPanel from "./Pages/Userpanel";
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";
import History from './Pages/History';
import Makepayment from "./Pages/Makepayment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/adlogin" element={<Adlogin />}></Route>
          <Route path="/user" element={<UserPanel />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/dash" element={<AdminDashboard />}></Route>
          <Route path="/history" element={< History/>}></Route>
          <Route path="/payment" element={< Makepayment/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

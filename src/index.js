import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/User/Register/Register";
import Login from "./pages/User/Login/Login";
import Profile from "./pages/User/Profile/Profile";
import Edit from "./pages/User/Edit/Edit";
import Cart from "./pages/User/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.2:3333" || "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/edit" element={<Edit />} />
        <Route path="/user/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

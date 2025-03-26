import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./Components/All";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import UserData from "./Components/UserData";
import Navbar from "./Components/Navbar";
import UserData1 from "./Components/UserData1";
import UserData2 from "./Components/UserData2";
import UserData3 from "./Components/UserData3";
import UserData4 from "./Components/UserData4";
import UserData5 from "./Components/UserData5";
import MyOrders from "./Components/MyOrders";

function App() {
  const isUserLogin = JSON.parse(localStorage.getItem("isUserLogin"));
  console.log(isUserLogin);

  return (
    <BrowserRouter>
      {isUserLogin!==null&&isUserLogin.isLoggedIn==true ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={isUserLogin ? <All /> : <Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/clothes" element={<UserData1 />}></Route>
        <Route path="/electronics" element={<UserData2 />}></Route>
        <Route path="/furniture" element={<UserData3 />}></Route>
        <Route path="/shoes" element={<UserData4 />}></Route>
        <Route path="/miscellaneous" element={<UserData5 />}></Route>
        <Route path="/myorders" element={<MyOrders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

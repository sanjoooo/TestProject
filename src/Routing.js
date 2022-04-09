import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMenu from "./AddMenu";
import Admin from "./Admin";
import Navbar from "./Navbar";
import Login from "./Login";
import MenuCard from "./MenuCard";
import Signup3 from "./Signup3";
import Error from "./Error";
import SignOut from "./SignOut";
import Home from "./Home";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/signup3" element={<Signup3 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menucard" element={<MenuCard />} />
          <Route path="/*" element={<Error/>} />
          <Route path="/signout" element={<SignOut/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Routing;

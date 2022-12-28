import React from "react";
import { Routes, Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Donate from "./components/donate/Donate";
import Messages from "./components/messages/Massages";
import User from "./components/user/User";
import Settings from "./components/settings/Settings";

const Content = () => {
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/message" element={<Messages/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  </Router>
}

function App() {
  return (
    <>
        <Navbar/>
        
        <Content/>
    </>
  );
}
export default App;

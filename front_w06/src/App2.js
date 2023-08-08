import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoAmI from "./pages/WhoAmI";

const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/whoami" element={<WhoAmI />}></Route>
    </Routes>
  );
};

export default App2;

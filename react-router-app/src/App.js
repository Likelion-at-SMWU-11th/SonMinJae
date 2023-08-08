import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Community from "./Community";
import MyPage from "./MyPage";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/mypage">My Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menu;

import React from "react";
import "./NavBar.css";
import image from "../Images/empay.png";
import { Link } from "react-router-dom";

const menuList = (data) => {
  return data.map(({ title, page }, index) => {
    return (
      <li key={index}>
        <Link to={`${page}`}>{title}</Link>
      </li>
    );
  });
};

const NavBar = (props) => {
  return (
    <nav>
      <div className="logo">
        <img src={image} alt="logo" />
      </div>
      <div>
        <ul className="menu-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {menuList(props.data)}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

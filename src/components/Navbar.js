import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/nasa.png";
import "./Navbar.css";

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Image = styled.img`
  height: 30px;
  padding-top: 14px;
  padding-left: 16px;
`;

const Navbar = () => {
  return (
    <NavBar className="nav-bar">
      <Image alt="red nasa" src={logo} />
      <NavLink to="/favorites" activeClassName="active">
        Favorites
      </NavLink>
      <NavLink to="/photos" activeClassName="active">
        Photos
      </NavLink>
      <NavLink to="/rovers" activeClassName="active">
        Rovers
      </NavLink>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
    </NavBar>
  );
};

export default Navbar;

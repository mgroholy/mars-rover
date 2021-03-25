import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/nasa.png";
import { MobileIcon } from "./MobileSideBar/MobileSidebarElements";
// import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileSideBar from "./MobileSideBar/MobileSideBar";

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  height: 51px;
  width: 100%;
`;

const Image = styled.img`
  height: 30px;
  padding-top: 14px;
  padding-left: 16px;
`;

const NavbarLink = styled(NavLink)`
  float: right;
  display: block;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  @media screen and (max-width: 1000px) {
    display: none;
  }
  &:hover {
    color: #ad6242;
  }

  &.active {
    color: #ad6242;
    border-bottom-width: 3px;
    border-bottom-style: solid;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBar className="nav-bar">
        <Image alt="red nasa" src={logo} />
        <NavbarLink to="/favorites" activeClassName="active">
          Favorites
        </NavbarLink>
        <NavbarLink to="/photos" activeClassName="active">
          Photos
        </NavbarLink>
        <NavbarLink to="/rovers" activeClassName="active">
          Rovers
        </NavbarLink>
        <NavbarLink exact to="/" activeClassName="active">
          Home
        </NavbarLink>
        <MobileIcon onClick={toggleMobileNav}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </MobileIcon>
      </NavBar>
      <MobileSideBar isOpen={isOpen} toggleMobileNav={toggleMobileNav} />
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavLink = styled(Link)`
  float: right;
  display: block;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  :hover {
    color: #ad6242;
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/photos">Photos</NavLink>
      <NavLink to="/rovers">Rovers</NavLink>
      <NavLink to="/">Home</NavLink>
    </NavBar>
  );
};

export default Navbar;

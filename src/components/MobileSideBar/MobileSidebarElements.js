import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobileSidebarContainer = styled.div`
  display: flex;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 50px;
  background: #333;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  z-index: 10;
  border-radius: 5px;

  transition: left 0.3s ease-in-out;
`;

export const SidebarOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SidebarOption = styled(NavLink)`
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
  margin: 30px;
  width: 80%;
  padding-bottom: 5px;
  /* background: grey; */
  text-align: center;
  border-bottom: 3px solid #ad6242;

  &:hover {
    color: #ad6242;
    transition: 0.3s all ease-in-out;
  }

  &:active {
    color: #ad6242;
    border-bottom-width: 3px;
    border-bottom-style: solid;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    cursor: pointer;
    float: right;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 20px;
  }
`;

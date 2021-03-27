import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    cursor: pointer;
    float: left;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #333;
    margin-left: 20px;
  }
`;

export const MobileText = styled.div`
  font-weight: bolder;
  color: #333;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  left: ${({ isFilterOpen }) => (isFilterOpen ? "0" : "-100%")};
  top: 150px;
  background: lightgray;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  z-index: 10;
  border-radius: 5px;

  transition: left 0.3s ease-in-out;
`;

export const FilterOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RoverLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  color: #333;
  margin: 20px;
  width: 60%;
  padding-bottom: 5px;
  text-align: center;
  border-bottom: 2px solid #ad6242;

  :hover {
    color: #ad6242;
  }
`;

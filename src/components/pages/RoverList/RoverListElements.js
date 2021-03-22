import { Link } from "react-router-dom";
import styled from "styled-components";

export const RoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;

export const RoverCard = styled(Link)`
  position: relative;
  width: 22%;
  height: 70%;
  overflow: hidden;
  border-radius: 5px;
  background: black;
  text-decoration: none;
  &:hover {
    transform: scale(1.03);
    transition: 0.3s ease-in-out;
  }
`;

export const RoverImg = styled.img`
  height: 100%;
  &:hover {
    opacity: 0.9;
    transition: 0.3s ease-in-out;
  }
`;

export const RoverName = styled.h1`
  position: absolute;
  text-align: center;
  background: #fff;
  bottom: 0;
  left: 0;
  margin-left: 10px;
  margin-bottom: 10px;
  background: transparent;
  color: #fff;
  font-size: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
`;

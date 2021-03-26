import { Link } from "react-router-dom";
import styled from "styled-components";

export const RoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    align-items: center;
    height: auto;
    min-height: 100vh;
  }
`;

export const RoverCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 60%;
  }

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    height: 90%;
  }
`;

export const RoverCard = styled(Link)`
  position: relative;
  width: 22%;
  height: 70%;
  max-height: 700px;
  overflow: hidden;
  border-radius: 5px;
  background: black;
  text-decoration: none;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.03);
    transition: 0.3s ease-in-out;
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 992px) {
    width: 250px;
    height: 250px;
    margin: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    margin: 0;
    margin-top: 20px;
  }
`;

export const RoverImg = styled.img`
  height: 100%;
  &:hover {
    opacity: 0.95;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
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
  font-size: min(2vw, 30px);

  @media screen and (max-width: 992px) {
    margin-bottom: 215px;
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 65px;
    font-size: 24px;
  }
`;

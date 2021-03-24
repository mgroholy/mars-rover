import styled from "styled-components";
import BgImg from "../../../images/home_bg_wide.jpg";

export const HomeContainer = styled.div`
  background: url(${BgImg}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
  object-fit: contain;
  justify-content: center;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-right: 40%;
  margin-bottom: 20vh;
  width: 30%;
  min-width: 300px;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 68px;
  margin-bottom: 10px;

  @media screen and (max-width: 1300px) {
    font-size: 48px;
  }
`;

export const HomeText = styled.p`
  color: #fff;
  font-size: 24px;
  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }
`;

import styled from "styled-components";

export const RoverDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

export const RoverDetailCard = styled.div`
  height: 80%;
  width: 80%;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const RoverDetailImg = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    border-radius: 5px;
  }
`;

export const RoverDetailName = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 3px solid #ad6242;
  width: 100%;

  @media screen and (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
  }
`;

export const RoverDetailDescription = styled.p`
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const RoverDetailContent = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  min-width: 500px;
  flex-direction: column;
  justify-content: left;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;

  @media screen and (max-width: 1000px) {
    min-width: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const NasaButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 50px;
  width: 300px;
  text-decoration: none;
  background: #ad6242;
  margin-top: 20px;
  font-weight: bold;
  color: #f5f5f5ff;

  &:hover {
    background: transparent;
    border: 4px solid #ad6242;
    color: #ad6242;
    transition: background 0.3s ease;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    min-width: 200px;

    &:active {
      background: transparent;
      border: 4px solid #ad6242;
      color: #ad6242;
      transition: background 0.3s ease;
    }

    &:hover {
      border: none;
      background: #ad6242;
      color: #f5f5f5ff;
    }
  }
`;

export const RoverImgWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  flex-grow: 1;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 300px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

import styled from "styled-components";

export const RoverDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const RoverDetailCard = styled.div`
  height: 70%;
  width: 80%;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
`;

export const RoverDetailImg = styled.img`
  height: 100%;
`;

export const RoverDetailName = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 3px solid #ad6242;
  width: 100%;
`;

export const RoverDetailDescription = styled.p`
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
`;

export const RoverDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
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
`;

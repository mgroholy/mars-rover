import { Link } from "react-router-dom";
import styled from "styled-components";

export const FavoriteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const FavoriteCard = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FavoriteHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const FavoriteHeroImage = styled(Link)`
  height: 90%;
  border-radius: 5px;
  overflow: hidden;

  img {
    height: 100%;
  }
  &:hover {
    transform: scale(1.02);
    transition: 0.3s ease-in-out;
  }
`;

export const FavoriteSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28%;
  width: 100%;
`;

export const FavoriteSelectionCard = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;

export const SelectionDivider = styled.div`
  width: 80%;
  height: 10px;
  border-bottom: 2px solid #333;
`;

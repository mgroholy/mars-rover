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
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1), 1px 5px 20px rgba(0, 0, 0, 0.2);
`;

export const FavoriteHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const FavoriteSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FavoriteSelectionCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  overflow: hidden;
  transform: ${({ selected }) => (selected ? "scale(1.15)" : "none")};

  &:hover {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
  }
`;

export const FavoriteSelectionImage = styled.img`
  height: 100%;
`;

export const SelectionDivider = styled.div`
  width: 80%;
  height: 10px;
  border-bottom: 3px solid #ad6242;
`;

export const FavoriteSidebar = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const FavoriteGalleryElem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SidebarTitle = styled.h1`
  font-size: 42px;
  width: 100%;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SidebarDescription = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  line-height: 2.5rem;
`;

export const FavoritePhotoDetails = styled.div`
  width: 100%;
  margin-left: 40px;
  font-size: 18px;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10%;
`;

export const FavoriteSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28%;
  width: 100%;
`;

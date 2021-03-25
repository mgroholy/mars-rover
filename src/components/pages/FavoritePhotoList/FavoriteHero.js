import React from "react";
import {
  FavoriteHeroImage,
  FavoriteHeroWrapper,
  FavoriteSidebar,
  HeroImageWrapper,
  SelectionDivider,
  SidebarDescription,
  SidebarTitle,
} from "./FavoriteListElements";

const FavoriteHero = ({ heroImg }) => {
  return (
    <FavoriteHeroWrapper>
      <HeroImageWrapper>
        <FavoriteHeroImage
          to={{
            pathname: `/photo/${heroImg.id}`,
            state: heroImg,
          }}
        >
          <img src={heroImg.image} alt="mars" />
        </FavoriteHeroImage>
      </HeroImageWrapper>
      <FavoriteSidebar>
        <SidebarTitle>Favorite Photos</SidebarTitle>
        <SelectionDivider />
        <SidebarDescription>
          <h2>Photo details:</h2>
          <p>Rover: {heroImg.rover}</p>
          <p>Date: {heroImg.date}</p>
          <p>Id: {heroImg.id}</p>
        </SidebarDescription>
      </FavoriteSidebar>
    </FavoriteHeroWrapper>
  );
};

export default FavoriteHero;

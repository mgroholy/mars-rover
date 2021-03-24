import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import {
  FavoriteCard,
  FavoriteContainer,
  FavoriteGallery,
  FavoriteHeroImage,
  FavoriteHeroWrapper,
  FavoriteSelection,
  FavoriteSelectionCard,
  FavoriteSelectionWrapper,
  FavoriteSidebar,
  HeroImageWrapper,
  Arrow,
  SelectionDivider,
  SidebarDescription,
  SidebarTitle,
  FavoriteSelectionImage,
} from "./FavoriteListElements";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiBlock } from "react-icons/bi";

const FavoritePhotoList = () => {
  const [favorites] = useContext(FavoriteContext);
  const [heroImg, setHeroImg] = useState({ image: "" });

  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [numberOfDisplayedPhotos, setNumberOfDisplayedPhotos] = useState(7);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(
    firstDisplayed + numberOfDisplayedPhotos
  );

  const nextPage = () => {
    setFirstDisplayed(firstDisplayed + numberOfDisplayedPhotos);
    setLastDisplayed(lastDisplayed + numberOfDisplayedPhotos);
    setDisplayedPhotos(favorites.slice(firstDisplayed, lastDisplayed));
  };

  const previousPage = () => {
    setFirstDisplayed(firstDisplayed - numberOfDisplayedPhotos);
    setLastDisplayed(lastDisplayed - numberOfDisplayedPhotos);
    setDisplayedPhotos(favorites.slice(firstDisplayed, lastDisplayed));
  };

  useEffect(() => {
    if (favorites.length > 0) {
      setHeroImg(favorites[0]);
      setDisplayedPhotos(favorites.slice(firstDisplayed, lastDisplayed));
    }
  }, [favorites, firstDisplayed, lastDisplayed]);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1300) {
      setNumberOfDisplayedPhotos(3);
    } else if (window.innerWidth <= 1600) {
      setNumberOfDisplayedPhotos(5);
    } else {
      setNumberOfDisplayedPhotos(7);
    }
  });

  return (
    <div>
      <FavoriteContainer>
        <FavoriteCard>
          <FavoriteGallery>
            {heroImg.image !== "" ? (
              <>
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
                <SelectionDivider />
              </>
            ) : (
              <>
                <BiBlock size={120} />
                <h1>No favorite photos</h1>
              </>
            )}

            <FavoriteSelectionWrapper>
              {console.log("firstdisplayed", firstDisplayed)}
              <Arrow>
                {firstDisplayed > 0 && (
                  <IoIosArrowBack size={40} onClick={previousPage} />
                )}
              </Arrow>
              <FavoriteSelection>
                {console.log(displayedPhotos)}
                {displayedPhotos.map((favorite) => (
                  <FavoriteSelectionCard
                    onClick={() => setHeroImg(favorite)}
                    selected={favorite.id === heroImg.id ? "true" : "false"}
                  >
                    <FavoriteSelectionImage src={favorite.image} alt="mars" />
                  </FavoriteSelectionCard>
                ))}
              </FavoriteSelection>
              {console.log("lastDisplayed", lastDisplayed)}
              <Arrow>
                {lastDisplayed < favorites.length && (
                  <IoIosArrowForward size={40} onClick={nextPage} />
                )}
              </Arrow>
            </FavoriteSelectionWrapper>
          </FavoriteGallery>
        </FavoriteCard>
      </FavoriteContainer>
    </div>
  );
};

export default FavoritePhotoList;

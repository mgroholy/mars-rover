import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Arrow,
  FavoriteSelection,
  FavoriteSelectionCard,
  FavoriteSelectionImage,
  FavoriteSelectionWrapper,
} from "./FavoriteListElements";

const FavoriteSelectionBar = ({ setHeroImg, heroImg, favorites }) => {
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
      setDisplayedPhotos(favorites.slice(firstDisplayed, lastDisplayed));
    }
  }, [favorites, firstDisplayed, lastDisplayed]);

  return (
    <FavoriteSelectionWrapper>
      <Arrow>
        {firstDisplayed > 0 && (
          <IoIosArrowBack size={40} onClick={previousPage} />
        )}
      </Arrow>
      <FavoriteSelection>
        {displayedPhotos.map((favorite) => (
          <FavoriteSelectionCard
            onClick={() => setHeroImg(favorite)}
            selected={favorite.id === heroImg.id ? "true" : "false"}
          >
            <FavoriteSelectionImage src={favorite.image} alt="mars" />
          </FavoriteSelectionCard>
        ))}
      </FavoriteSelection>
      <Arrow>
        {lastDisplayed < favorites.length && (
          <IoIosArrowForward size={40} onClick={nextPage} />
        )}
      </Arrow>
    </FavoriteSelectionWrapper>
  );
};

export default FavoriteSelectionBar;

import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Arrow,
  FavoriteSelection,
  FavoriteSelectionCard,
  FavoriteSelectionImage,
  FavoriteSelectionWrapper,
} from "./FavoriteListElements";
import useCurrentWidth from "./useCurrentWidth";

const FavoriteSelectionBar = ({ setHeroImg, heroImg, favorites }) => {
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [numberOfDisplayedPhotos, setNumberOfDisplayedPhotos] = useState(6);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(
    firstDisplayed + numberOfDisplayedPhotos
  );

  const width = useCurrentWidth();

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
    // if (width < 1500) {
    //   setNumberOfDisplayedPhotos(4);
    //   setFirstDisplayed(0);
    //   setLastDisplayed(firstDisplayed + numberOfDisplayedPhotos);
    // } else {
    //   setNumberOfDisplayedPhotos(6);
    //   setFirstDisplayed(0);
    //   setLastDisplayed(firstDisplayed + numberOfDisplayedPhotos);
    // }

    setDisplayedPhotos(favorites.slice(firstDisplayed, lastDisplayed));
  }, [
    favorites,
    firstDisplayed,
    lastDisplayed,
    numberOfDisplayedPhotos,
    width,
  ]);

  return (
    <FavoriteSelectionWrapper>
      {console.log(width)}
      {console.log(numberOfDisplayedPhotos)}
      <Arrow>
        {firstDisplayed > 0 && (
          <IoIosArrowBack size={40} onClick={previousPage} />
        )}
      </Arrow>
      <FavoriteSelection>
        {displayedPhotos.map((favorite) => (
          <FavoriteSelectionCard
            key={favorite.id}
            onClick={() => setHeroImg(favorite)}
            selected={favorite.id === heroImg.id ? true : false}
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

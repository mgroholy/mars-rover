import React, { useEffect, useState } from "react";
import FavoriteHero from "./FavoriteHero";
import { FavoriteGalleryElem, SelectionDivider } from "./FavoriteListElements";
import FavoriteSelectionBar from "./FavoriteSelectionBar";

const FavoriteGallery = ({ favorites }) => {
  const [heroImg, setHeroImg] = useState({ image: "" });

  useEffect(() => {
    if (favorites.length > 0) {
      setHeroImg(favorites[0]);
    }
  }, [favorites]);

  return (
    <FavoriteGalleryElem>
      <FavoriteHero heroImg={heroImg} />
      <SelectionDivider />
      <FavoriteSelectionBar
        setHeroImg={setHeroImg}
        heroImg={heroImg}
        favorites={favorites}
      />
    </FavoriteGalleryElem>
  );
};

export default FavoriteGallery;

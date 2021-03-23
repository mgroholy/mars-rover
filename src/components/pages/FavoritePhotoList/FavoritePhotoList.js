import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import PhotoItem from "../Photos/list-page/PhotoItem";
import {
  FavoriteCard,
  FavoriteContainer,
  FavoriteHeroImage,
  FavoriteHeroWrapper,
  FavoriteSelection,
  FavoriteSelectionCard,
  SelectionDivider,
} from "./FavoriteListElements";

const FavoritePhotoList = () => {
  const [favorites] = useContext(FavoriteContext);
  const [heroImg, setHeroImg] = useState({ image: "" });

  const selectHeroImage = (src) => {
    setHeroImg(src);
  };

  useEffect(() => {
    if (favorites.length > 0) {
      setHeroImg(favorites[0]);
    }
  }, [favorites]);

  return (
    <div>
      <FavoriteContainer>
        <FavoriteCard>
          <FavoriteHeroWrapper>
            <FavoriteHeroImage
              to={{
                pathname: `/photo/${heroImg.id}`,
                state: heroImg,
              }}
            >
              <img src={heroImg.image} alt="mars" />
            </FavoriteHeroImage>
          </FavoriteHeroWrapper>
          <SelectionDivider />
          <FavoriteSelection>
            {favorites.map((favorite) => (
              <FavoriteSelectionCard
                src={favorite.image}
                alt="mars"
                onClick={() => setHeroImg(favorite)}
              />
            ))}
          </FavoriteSelection>
        </FavoriteCard>
      </FavoriteContainer>
    </div>
  );
};

export default FavoritePhotoList;

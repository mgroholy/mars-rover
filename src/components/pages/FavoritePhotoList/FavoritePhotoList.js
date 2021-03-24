import React, { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import { FavoriteCard, FavoriteContainer } from "./FavoriteListElements";
import { BiBlock } from "react-icons/bi";
import FavoriteGallery from "./FavoriteGallery";

const FavoritePhotoList = () => {
  const [favorites] = useContext(FavoriteContext);

  return (
    <div>
      <FavoriteContainer>
        <FavoriteCard>
          {favorites.length > 0 ? (
            <>
              <FavoriteGallery favorites={favorites} />
            </>
          ) : (
            <>
              <BiBlock size={120} />
              <h1>No favorite photos</h1>
            </>
          )}
        </FavoriteCard>
      </FavoriteContainer>
    </div>
  );
};

export default FavoritePhotoList;

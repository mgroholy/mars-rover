import React, { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import { FavoriteCard, FavoriteContainer } from "./FavoriteListElements";
import { BiBlock } from "react-icons/bi";
import FavoriteGallery from "./FavoriteGallery";

const FavoritePhotoList = () => {
  const [favorites] = useContext(FavoriteContext);

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth <= 1300) {
  //     setNumberOfDisplayedPhotos(3);
  //   } else if (window.innerWidth <= 1600) {
  //     setNumberOfDisplayedPhotos(5);
  //   } else {
  //     setNumberOfDisplayedPhotos(7);
  //   }
  // });

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

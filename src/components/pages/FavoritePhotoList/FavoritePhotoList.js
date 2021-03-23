import React, { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import PhotoItem from "../Photos/list-page/PhotoItem";
import { Container } from "../Photos/list-page/PhotoList";

const FavoritePhotoList = () => {
  const [favorites] = useContext(FavoriteContext);

  return (
    <div>
      <Container>
        {favorites.map((favorite) => (
          <PhotoItem
            id={favorite.id}
            image={favorite.image}
            rover={favorite.rover}
            date={favorite.date}
          />
        ))}
      </Container>
    </div>
  );
};

export default FavoritePhotoList;

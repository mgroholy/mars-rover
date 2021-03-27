import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Card,
  Description,
  Image,
  Button,
  FavoriteContainer,
  FavoriteIcon,
  RoverDetail,
  DateDetail,
} from "./PhotoDetailElements";
import { FaRegStar, FaStar, FaRegTrashAlt, FaTrashAlt } from "react-icons/fa";
import FavoriteContext from "../../context/FavoriteContext";

const PhotoDetail = (props) => {
  const { id, image, rover, date } = props.location.state;

  const [hover, setHover] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const FilledIcon = favorited ? FaTrashAlt : FaStar;
  const OutlineIcon = favorited ? FaRegTrashAlt : FaRegStar;

  const onHover = () => setHover(!hover);

  const addToFavorites = () => {
    const imageObj = { id, image, rover, date };
    setFavorites([...favorites, imageObj]);
  };
  const removeFromFavorites = () => {
    const result = favorites.filter((img) => img.image !== image);
    setFavorites(result);
  };

  useEffect(() => {
    if (favorites.some((img) => img.id === id)) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favorited, id, favorites]);

  return (
    <Card>
      <Image alt="mars-quality" src={image} />
      <Container>
        <Description>
          <RoverDetail>Rover: {rover}</RoverDetail>
          <FavoriteContainer
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={favorited ? removeFromFavorites : addToFavorites}
          >
            <FavoriteIcon>
              {hover ? <FilledIcon size={25} /> : <OutlineIcon size={25} />}
            </FavoriteIcon>
            <p>{favorited ? "Remove from favorites" : "Add to favorites"}</p>
          </FavoriteContainer>
          <DateDetail>Earth date: {date}</DateDetail>
        </Description>
        <Button onClick={useHistory().goBack}>&lt; Go back</Button>
      </Container>
    </Card>
  );
};

export default PhotoDetail;

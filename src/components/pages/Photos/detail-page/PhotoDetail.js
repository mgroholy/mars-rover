import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaRegStar, FaStar, FaRegTrashAlt, FaTrashAlt } from "react-icons/fa";
import FavoriteContext from "../../../context/FavoriteContext";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 800px;
`;

const Card = styled.div`
  display: grid;
  height: 100%;
`;

const Description = styled.div`
  padding: 10px 15px 15px 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ad6242;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #ad6242;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  margin-top: 25px;

  :hover {
    color: #ad6242;
  }
`;

const FavoriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FavoriteIcon = styled.span`
  margin-right: 10px;
`;

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
          <div style={{ display: "inline-block" }}>Rover: {rover}</div>
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
          <div style={{ display: "inline-block" }}>Earth date: {date}</div>
        </Description>
        <Button onClick={useHistory().goBack}>&lt; Go back</Button>
      </Container>
    </Card>
  );
};

export default PhotoDetail;

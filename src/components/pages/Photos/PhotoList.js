import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";

const API_KEY = process.env.REACT_APP_API_KEY;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 1200px;
`;

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("2012-08-06");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${page}&api_key=${API_KEY}`
  );

  useEffect(() => {
    axios.get(url).then((response) => setPhotos(response.data.photos));
  }, [url]);

  const photoItems = photos.map((photo) => (
    <PhotoItem id={photo.id} image={photo.img_src} key={photo.id} />
  ));

  return <Container>{photoItems}</Container>;
};

export default PhotoList;

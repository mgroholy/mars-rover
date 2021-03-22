import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";

const API_KEY = process.env.REACT_APP_API_KEY;

const PhotoList = () => {
  const [state, setState] = useState({
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&page=1&api_key=${API_KEY}`,
    photos: [],
  });

  useEffect(() => {
    axios.get(state.url).then((response) =>
      setState({
        photos: response.data.photos,
      })
    );
  }, [state.url]);

  const photoItems = state.photos.map((photo) => (
    <PhotoItem id={photo.id} image={photo.img_src} key={photo.id} />
  ));

  return <div>{photoItems}</div>;
};

export default PhotoList;

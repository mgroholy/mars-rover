import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import { PaginationBar, PaginationLink } from "./Pagination";
import Filterbar from "./Filterbar";

const API_KEY = process.env.REACT_APP_API_KEY;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 800px;
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
    <PhotoItem
      id={photo.id}
      image={photo.img_src}
      rover={photo.rover.name}
      date={photo.earth_date}
      key={photo.id}
    />
  ));

  const loadPrevious = (e) => {
    e.preventDefault();
    let pageNumber = page - 1;
    // TODO: condition
    setPage(pageNumber);
    setUrl(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${pageNumber}&api_key=${API_KEY}`
    );
  };

  const loadNext = (e) => {
    e.preventDefault();
    let pageNumber = page + 1;
    // TODO: condition
    setPage(page + 1);
    setUrl(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${pageNumber}&api_key=${API_KEY}`
    );
  };

  const filterByRover = (e) => {};

  return (
    <div>
      <Filterbar onFilterClick={filterByRover} />
      <Container>{photoItems}</Container>
      <PaginationBar>
        <PaginationLink href="/" onClick={loadPrevious}>
          &lt;
        </PaginationLink>
        <PaginationLink href="/" onClick={loadNext}>
          &gt;
        </PaginationLink>
      </PaginationBar>
    </div>
  );
};

export default PhotoList;

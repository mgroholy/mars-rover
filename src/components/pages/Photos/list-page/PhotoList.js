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

const Alert = styled.div`
  background: lightgoldenrodyellow;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
`;

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("2021-03-22");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${page}&api_key=${API_KEY}`
  );
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}?api_key=${API_KEY}`
      );
      let lastDate = response.data.rover.max_date;
      setDate(lastDate);
      setPage(1);
      setUrl(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${lastDate}&page=1&api_key=${API_KEY}`
      );
    };
    fetchData();
  }, [rover]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = response.data.photos;
      data.length === 0 ? setEmpty(true) : setEmpty(false);
      setPhotos(data);
    };
    fetchData();
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
    if (page > 1) {
      let pageNumber = page - 1;
      setPage(pageNumber);
      setUrl(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${pageNumber}&api_key=${API_KEY}`
      );
    }
  };

  const loadNext = (e) => {
    e.preventDefault();
    let pageNumber = page + 1;
    setPage(page + 1);
    setUrl(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${pageNumber}&api_key=${API_KEY}`
    );
  };

  const filterByRover = (e) => {
    let roverName = e.target.textContent;
    setRover(roverName);
  };

  const warningMessage = (
    <Alert>
      <p>More photos for this date cannot be found.</p>
    </Alert>
  );

  return (
    <div>
      <Filterbar onFilterClick={filterByRover} />
      <Container>{isEmpty ? warningMessage : photoItems}</Container>
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

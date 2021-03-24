import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import { PaginationBar, PaginationLink } from "./Pagination";
import Filterbar from "./Filterbar";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Container = styled.div`
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
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDateFilterOn, setIsDateFilterOn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}?api_key=${API_KEY}`
      );
      let lastDate = response.data.rover.max_date;
      setPage(1);

      if (isDateFilterOn) {
        setUrl(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=1&api_key=${API_KEY}`
        );
      } else {
        setDate(lastDate);
        setUrl(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${lastDate}&page=1&api_key=${API_KEY}`
        );
      }
    };

    fetchData();
  }, [rover, date, isDateFilterOn]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get(url);
        const data = response.data.photos;
        data.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
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
    document
      .querySelectorAll(".filter-rover a")
      .forEach((element) => element.classList.remove("selected"));
    e.target.classList.add("selected");
    setRover(roverName);
  };

  const filterByDate = (e) => {
    const isEnterPressed = e.keyCode === 13;
    if (isEnterPressed) {
      const dateInput = e.target.value;
      setIsDateFilterOn(true);
      setDate(dateInput);
    }
  };

  const resetDateToLatest = () => {
    setIsDateFilterOn(false);
    document.querySelector("input").value = "";
  };

  const warningMessage = (
    <Alert>
      <p>
        {isEmpty
          ? "No (more) photos were found for this date."
          : "Please enter a date in the format 'yyyy-mm-dd'."}
      </p>
    </Alert>
  );

  const displayPhotoContainer = () => {
    if (isLoading) {
      return "Loading...";
    } else if (isEmpty || isError) {
      return warningMessage;
    } else {
      return photoItems;
    }
  };

  return (
    <div>
      <Filterbar
        onFilterClick={filterByRover}
        onKeyPressed={filterByDate}
        onResetClick={resetDateToLatest}
      />
      <Container>{displayPhotoContainer()}</Container>
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

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import Pagination from "./Pagination";
import Filterbar from "./Filterbar/Filterbar";
import Warning from "./Warning";
import LoaderSpinner from "./LoaderSpinner";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 800px;
`;

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDateFilterOn, setIsDateFilterOn] = useState(false);

  const didMountRef = useRef(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleMobileFilter = () => setIsFilterOpen(!isFilterOpen);

  useEffect(() => {
    const fetchMaxDate = async () => {
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

    if (!isDateFilterOn) fetchMaxDate();
  }, [rover, isDateFilterOn]);

  useEffect(() => {
    const fetchPhotos = async () => {
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

    if (didMountRef.current) {
      fetchPhotos();
    } else {
      didMountRef.current = true;
    }
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
    toggleMobileFilter();
    let roverName = e.target.textContent;
    document
      .querySelectorAll(".filter-rover a")
      .forEach((element) => element.classList.remove("selected"));
    e.target.classList.add("selected");
    setRover(roverName);
    setPage(1);
    if (isDateFilterOn) {
      setUrl(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&page=1&api_key=${API_KEY}`
      );
    }
  };

  const filterByDate = (e) => {
    const isEnterPressed = e.keyCode === 13;
    if (isEnterPressed) {
      const dateInput = e.target.value;
      setIsDateFilterOn(true);
      setDate(dateInput);
      setPage(1);
      setUrl(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateInput}&page=1&api_key=${API_KEY}`
      );
    }
  };

  const resetDateToLatest = () => {
    setIsDateFilterOn(false);
    document.querySelector("input").value = "";
  };

  const displayPhotoContainer = () => {
    if (isLoading) return <LoaderSpinner />;
    else if (isEmpty || isError)
      return <Warning incorrectDateFormat={isError} />;
    else
      return [
        photoItems,
        <Pagination
          onPreviousClick={loadPrevious}
          onNextClick={loadNext}
          key="pagination"
        />,
      ];
  };

  return (
    <div>
      <Filterbar
        onToggleClick={toggleMobileFilter}
        isFilterOpen={isFilterOpen}
        onFilterClick={filterByRover}
        onKeyPressed={filterByDate}
        onResetClick={resetDateToLatest}
        date={date}
      />
      <Container>{displayPhotoContainer()}</Container>
    </div>
  );
};

export default PhotoList;

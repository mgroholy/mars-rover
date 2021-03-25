import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import PhotoItem from "./PhotoItem";
import Pagination from "./Pagination";
import Filterbar from "./Filterbar/Filterbar";
import Warning from "./Warning";

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

    if (didMountRef.current) {
      fetchData();
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

  const loaderSpinner = (
    <Loader
      type="ThreeDots"
      color="#ad6242"
      height={50}
      width={50}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  const displayPhotoContainer = () => {
    if (isLoading) return loaderSpinner;
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RoverDetailCard, RoverDetailContainer } from "./RoverDetailElements";

const RoverDetail = () => {
  const { pathname } = useLocation();

  const [rover, setRover] = useState({});

  const fetchData = async (pathname) => {
    const roverName = pathname.split("/")[2];
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
    const response = await axios.get(
      `${url}${roverName}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setRover(response.data.rover);
    console.log(response.data.rover);
  };

  useEffect(() => fetchData(pathname), [pathname]);

  return (
    <RoverDetailContainer>
      <RoverDetailCard>Rover</RoverDetailCard>
    </RoverDetailContainer>
  );
};

export default RoverDetail;

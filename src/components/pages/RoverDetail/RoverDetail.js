import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RoverCardImages from "../RoverList/RoverCardImages";
import RoverDescription from "./RoverDescription";
import {
  RoverDetailCard,
  RoverDetailContainer,
  RoverDetailImg,
  RoverDetailName,
  RoverDetailDescription,
  RoverDetailContent,
  NasaButton,
} from "./RoverDetailElements";

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
      {rover.name && (
        <RoverDetailCard>
          <RoverDetailContent>
            <RoverDetailName>{rover.name}</RoverDetailName>
            <RoverDetailDescription>
              {RoverDescription[rover.name.toLowerCase()]}
            </RoverDetailDescription>
            <RoverDetailName></RoverDetailName>
            <RoverDetailDescription>
              Launch date: {rover.launch_date}
            </RoverDetailDescription>
            <RoverDetailDescription>
              Landing date: {rover.landing_date}
            </RoverDetailDescription>
            <RoverDetailDescription>
              Status: {rover.status}
            </RoverDetailDescription>
            <RoverDetailDescription>
              Photos taken: {rover.total_photos}
            </RoverDetailDescription>
            <RoverDetailDescription>
              Date of most recent photo: {rover.max_date}
            </RoverDetailDescription>
            <RoverDetailDescription>
              Sols spent on Mars: {rover.max_sol}
            </RoverDetailDescription>
            <NasaButton href="https://mars.nasa.gov/mer/" target="_blank">
              Learn more at NASA
            </NasaButton>
          </RoverDetailContent>
          <RoverDetailImg src={RoverCardImages[rover.name].normal} />
        </RoverDetailCard>
      )}
    </RoverDetailContainer>
  );
};

export default RoverDetail;

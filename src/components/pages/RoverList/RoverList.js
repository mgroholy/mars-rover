import React, { useEffect, useState } from "react";
import {
  RoverContainer,
  RoverCard,
  RoverImg,
  RoverName,
  RoverCards,
} from "./RoverListElements";
import axios from "axios";
import RoverCardImages from "./RoverCardImages";

const RoverList = () => {
  const url = "https://api.nasa.gov/mars-photos/api/v1/rovers";

  const [rovers, setRovers] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(
      `${url}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setRovers(response.data.rovers);
  };

  useEffect(() => fetchData(url), [url]);

  return (
    <RoverContainer>
      <RoverCards>
        {rovers.map((rover) => (
          <RoverCard to={`/rovers/${rover.name.toLowerCase()}`} key={rover.id}>
            <RoverImg src={RoverCardImages[rover.name].portrait} />
            <RoverName>{rover.name}</RoverName>
          </RoverCard>
        ))}
      </RoverCards>
    </RoverContainer>
  );
};

export default RoverList;

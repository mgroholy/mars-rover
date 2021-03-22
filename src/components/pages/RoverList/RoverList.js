import React from "react";
import {
  RoverContainer,
  RoverCard,
  RoverImg,
  RoverName,
} from "./RoverListElements";

import CuriosityImg from "../../../images/curiosity-portrait.jpg";
import PerseveranceImg from "../../../images/Perseverance_Landing_Skycrane_portrait.jpg";
import SpiritImg from "../../../images/1280px-NASA_Mars_Rover_portrait.jpg";
import OpportunityImg from "../../../images/opportunity-portrait.jpg";

const RoverList = () => {
  return (
    <RoverContainer>
      <RoverCard>
        <RoverImg src={CuriosityImg} />
        <RoverName>Rover</RoverName>
      </RoverCard>
      <RoverCard>
        <RoverImg src={SpiritImg} />
        <RoverName>Rover</RoverName>
      </RoverCard>
      <RoverCard>
        <RoverImg src={PerseveranceImg} />
        <RoverName>Rover</RoverName>
      </RoverCard>
      <RoverCard>
        <RoverImg src={OpportunityImg} />
        <RoverName>Rover</RoverName>
      </RoverCard>
    </RoverContainer>
  );
};

export default RoverList;

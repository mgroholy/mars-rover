import React from "react";
import {
  HomeContainer,
  HomeContent,
  HomeText,
  HomeTitle,
} from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitle>Discover Mars</HomeTitle>
        <HomeText>
          Take a look at Mars, the fourth planet from the Sun and the
          second-smallest planet in our Solar System, through the eyes of Nasa's
          Mars Exploration Rovers.
        </HomeText>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;

import React from "react";
import { Container, FilterOptions, RoverLink } from "./MobileFilterbarElements";

export const MobileFilterbar = ({ isOpen, toggleMobileFilter }) => {
  return (
    <Container isOpen={isOpen}>
      <FilterOptions>
        <RoverLink exact to="#" onClick={toggleMobileFilter}>
          Curiosity
        </RoverLink>
        <RoverLink to="#" onClick={toggleMobileFilter}>
          Opportunity
        </RoverLink>
        <RoverLink to="#" onClick={toggleMobileFilter}>
          Spirit
        </RoverLink>
        <RoverLink to="#" onClick={toggleMobileFilter}>
          Perseverance
        </RoverLink>
      </FilterOptions>
    </Container>
  );
};

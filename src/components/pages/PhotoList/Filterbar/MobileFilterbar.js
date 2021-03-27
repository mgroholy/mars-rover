import React from "react";
import { Container, FilterOptions, RoverLink } from "./MobileFilterbarElements";

export const MobileFilterbar = ({ isFilterOpen, onFilterClick }) => {
  return (
    <Container isFilterOpen={isFilterOpen}>
      <FilterOptions>
        <RoverLink to="#" onClick={onFilterClick}>
          Curiosity
        </RoverLink>
        <RoverLink to="#" onClick={onFilterClick}>
          Opportunity
        </RoverLink>
        <RoverLink to="#" onClick={onFilterClick}>
          Spirit
        </RoverLink>
        <RoverLink to="#" onClick={onFilterClick}>
          Perseverance
        </RoverLink>
      </FilterOptions>
    </Container>
  );
};

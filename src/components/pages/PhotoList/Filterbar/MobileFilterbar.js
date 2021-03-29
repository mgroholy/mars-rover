import React from "react";
import { Container, FilterOptions, RoverLink } from "./MobileFilterbarElements";
import "./Filterbar.css";

export const MobileFilterbar = ({ isFilterOpen, onFilterClick }) => {
  return (
    <Container isFilterOpen={isFilterOpen}>
      <FilterOptions className="filter-rover">
        <RoverLink to="#" className="selected" onClick={onFilterClick}>
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

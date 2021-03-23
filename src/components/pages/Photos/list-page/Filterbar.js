import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Filterbar.css";

const FilterBar = styled.div`
  background-color: lightgray;
  height: 40px;
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
`;

const FilterRover = styled.div`
  padding: 10px;
  display: flex;
  float: left;
`;

const FilterDate = styled.div`
  padding: 10px;
  display: flex;
  float: right;
`;

const Filterbar = () => {
  return (
    <FilterBar>
      <FilterRover className="filter-rover">
        <NavLink to="#">Curiosity</NavLink>
        <NavLink to="#">Opportunity</NavLink>
        <NavLink to="#">Spirit</NavLink>
        <NavLink to="#">Perseverance</NavLink>
      </FilterRover>
      <FilterDate>
        <input placeholder="2012-08-06" style={{ borderRadius: "5px" }} />
      </FilterDate>
    </FilterBar>
  );
};

export default Filterbar;

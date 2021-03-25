import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Filterbar.css";
import reset from "../../../images/reset.png";

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
  font-weight: bolder;
`;

const FilterDate = styled.div`
  padding: 7.5px;
  display: flex;
  float: right;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 25px;
`;

const Image = styled.img`
  height: 25px;
  margin-left: 5px;
  cursor: pointer;
`;

const Filterbar = (props) => {
  const today = new Date();
  const yesterday =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() - 1);

  return (
    <FilterBar>
      <FilterRover className="filter-rover">
        <NavLink to="#" className="selected" onClick={props.onFilterClick}>
          Curiosity
        </NavLink>
        <NavLink to="#" onClick={props.onFilterClick}>
          Opportunity
        </NavLink>
        <NavLink to="#" onClick={props.onFilterClick}>
          Spirit
        </NavLink>
        <NavLink to="#" onClick={props.onFilterClick}>
          Perseverance
        </NavLink>
      </FilterRover>
      <FilterDate>
        <Input onKeyDown={props.onKeyPressed} placeholder={yesterday} />
        <Image alt="reset-button" src={reset} onClick={props.onResetClick} />
      </FilterDate>
    </FilterBar>
  );
};

export default Filterbar;

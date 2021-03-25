import { NavLink } from "react-router-dom";
import {
  FilterBar,
  FilterRover,
  FilterDate,
  Input,
  Image,
} from "./FilterbarElements";
import "./Filterbar.css";
import reset from "../../../../images/reset.png";

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
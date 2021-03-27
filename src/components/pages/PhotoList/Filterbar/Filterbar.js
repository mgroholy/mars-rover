import { useState } from "react";
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
import { FaFilter, FaTimes } from "react-icons/fa";
import { MobileFilterbar } from "./MobileFilterbar";
import { MobileIcon, MobileText } from "./MobileFilterbarElements";

const Filterbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileFilter = () => setIsOpen(!isOpen);

  return (
    <div>
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
          <Input onKeyDown={props.onKeyPressed} placeholder={props.date} />
          <Image alt="reset-button" src={reset} onClick={props.onResetClick} />
        </FilterDate>

        <MobileIcon onClick={toggleMobileFilter}>
          {isOpen ? <FaTimes size={20} /> : <FaFilter size={20} />}
          <MobileText>Rovers</MobileText>
        </MobileIcon>
      </FilterBar>

      <MobileFilterbar
        isOpen={isOpen}
        toggleMobileFilter={toggleMobileFilter}
      />
    </div>
  );
};

export default Filterbar;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  MobileSidebarContainer,
  SidebarOption,
  SidebarOptions,
} from "./MobileSidebarElements";

const MobileSideBar = ({ isOpen, toggleMobileNav }) => {
  return (
    <MobileSidebarContainer isOpen={isOpen}>
      <SidebarOptions>
        <SidebarOption
          exact
          to="/"
          activeClassName="active"
          onClick={toggleMobileNav}
        >
          Home
        </SidebarOption>
        <SidebarOption
          to="/rovers"
          activeClassName="active"
          onClick={toggleMobileNav}
        >
          Rovers
        </SidebarOption>
        <SidebarOption
          to="/photos"
          activeClassName="active"
          onClick={toggleMobileNav}
        >
          Photos
        </SidebarOption>
        <SidebarOption
          to="/favorites"
          activeClassName="active"
          onClick={toggleMobileNav}
        >
          Favorites
        </SidebarOption>
      </SidebarOptions>
    </MobileSidebarContainer>
  );
};

export default MobileSideBar;

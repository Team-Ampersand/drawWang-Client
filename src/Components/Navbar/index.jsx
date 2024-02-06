import React from "react";
import * as s from "./style";
import { SearchSVG } from "../../Assets/svgs";

function Navbar() {
  return (
    <s.NavbarContainer>
      <s.NavBox>
        <s.NavItem to="/">주제</s.NavItem>
        <s.NavItem to="/halloffame">명예의 전당</s.NavItem>
      </s.NavBox>
      <s.SearchBox>
        <SearchSVG />
        <s.SearchInput placeholder="찾으시는 스레드가 있으신가요?" />
      </s.SearchBox>
    </s.NavbarContainer>
  );
}

export default Navbar;

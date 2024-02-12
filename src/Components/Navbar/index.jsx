import React, { useState } from "react";
import * as s from "./style";
import { SearchSVG } from "../../Assets/svgs";
import Search from "../../Components/Search";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  return (
    <s.NavbarContainer>
      <s.NavBox>
        <s.NavItem to="/">주제</s.NavItem>
        <s.NavItem to="/halloffame">명예의 전당</s.NavItem>
      </s.NavBox>
      <s.SearchContainer>
        <s.SearchBox>
          <SearchSVG />
          <s.SearchInput
            onFocus={() => setSearch(true)}
            maxLength={10} // 주제 최대길이
            onBlur={() => setSearch(false)}
            onChange={(e) => setSearchContent(e.target.value)}
            placeholder="찾으시는 스레드가 있으신가요?"
          />
        </s.SearchBox>
      </s.SearchContainer>
      <Search search={search} searchContent={searchContent} />
    </s.NavbarContainer>
  );
}

export default Navbar;

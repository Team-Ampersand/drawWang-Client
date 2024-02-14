import React, { useState, useEffect } from "react";
import * as s from "./style";
import { SearchSVG } from "../../Assets/svgs";
import Search from "../../Components/Search";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchBox = document.querySelector(".search-box");
      if (searchBox && !searchBox.contains(event.target)) {
        setSearchContent("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <s.NavbarContainer>
      <s.NavBox>
        <s.NavItem to="/">주제</s.NavItem>
        <s.NavItem to="/halloffame">명예의 전당</s.NavItem>
      </s.NavBox>
      <s.SearchContainer>
        <s.SearchBox className="search-box">
          <SearchSVG />
          <s.SearchInput
            onFocus={() => setSearch(true)}
            value={searchContent}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setSearchContent(e.target.value);
              }
            }}
            placeholder="찾으시는 스레드가 있으신가요?"
          />
          <Search search={search} searchContent={searchContent} />
        </s.SearchBox>
      </s.SearchContainer>
    </s.NavbarContainer>
  );
}

export default Navbar;

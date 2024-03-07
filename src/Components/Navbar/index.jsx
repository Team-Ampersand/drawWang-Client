import React, { useState, useEffect } from "react";
import * as s from "./style";
import { SearchSVG, MenuBarSVG } from "../../Assets/svgs";
import Search from "../../Components/Search";
import NavMenu from "../../Components/PopUp/navmenu";
import CreateThread from "../../Components/PopUp/createthread";

function Navbar({threadData,boardData,topics,setTopics,setTopicsid,topicsid}) {
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [isNavMenuClicked, setIsNavMenuClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false);
  const handleNavMenuClick = () => {
    setIsNavMenuClicked(!isNavMenuClicked);
  };

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
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
            <Search search={search} searchContent={searchContent}threadData={threadData} boardData={boardData} topics={topics} setTopics={setTopics} topicsid={topicsid} setTopicsid={setTopicsid}/>
          </s.SearchBox>
        </s.SearchContainer>
        <s.NavMenuBar onClick={handleNavMenuClick}>
          <MenuBarSVG />
        </s.NavMenuBar>
      </s.NavbarContainer>
      {isNavMenuClicked ? (
        <NavMenu
          isNavMenuClicked={isNavMenuClicked}
          setIsNavMenuClicked={setIsNavMenuClicked}
          threadData={threadData} 
        />
      ) : (
        ""
      )}
      {sameTopicAlreadyExist && (
        <CreateThread
          inputValue={inputValue}
          sameTopicAlreadyExist={sameTopicAlreadyExist}
          handleInputChange={handleInputChange}
          testFunc={() => setSameTopicAlreadyExist(false)}
          handleTypeTopicPopUp={() => setSameTopicAlreadyExist(false)}
        />
      )}
    </>
  );
}

export default Navbar;

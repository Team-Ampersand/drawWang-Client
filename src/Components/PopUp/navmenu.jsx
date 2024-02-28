import React, { useState, useEffect } from "react";
import * as s from "./style";
import { SearchSVG } from "../../Assets/svgs";
import Search from "../../Components/Search";
import CreateThread from "../../Components/PopUp/createthread";

function NavMenu({ isNavMenuClicked, setIsNavMenuClicked }) {
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [isCreateThreadClicked, setIsCreateThreadClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false);

  const handleNavMenuClick = () => {
    setIsNavMenuClicked(!isNavMenuClicked);
  };

  const handleCreateThreadClick = () => {
    setIsCreateThreadClicked(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchBox = document.querySelector(".search-box");
      if (searchBox && !searchBox.contains(event.target)) {
        setSearchContent("");
        setSearch(false);
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

  const testFunc = () => {
    setSameTopicAlreadyExist(!sameTopicAlreadyExist);
  };

  const handleTypeTopicPopUp = () => {
    setIsCreateThreadClicked(false);
  };

  return (
    <>
      <s.NavMenuBackground onClick={handleNavMenuClick} />
      <s.NavMenuContainer>
        <s.NavMenuSearchContainer>
          <s.NavMenuSearchBox className="search-box">
            <SearchSVG />
            <s.NavMenuSearchInput
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
          </s.NavMenuSearchBox>
        </s.NavMenuSearchContainer>
        {!search && ( // search가 false일 때만 렌더링
          <s.NavMenuUl>
            <s.NavMenuLi to="/">주제</s.NavMenuLi>
            <s.NavMenuLi to="/halloffame">명예의 전당</s.NavMenuLi>
          </s.NavMenuUl>
        )}
        <s.CreateThreadText>
          찾으시는 스레드가 없나요?{" "}
          <s.CreateThreadButtonText onClick={handleCreateThreadClick}>
            스레드 만들기
          </s.CreateThreadButtonText>
        </s.CreateThreadText>
      </s.NavMenuContainer>
      {isCreateThreadClicked && (
        <CreateThread
          inputValue={inputValue}
          sameTopicAlreadyExist={sameTopicAlreadyExist}
          handleInputChange={handleInputChange}
          testFunc={testFunc}
          handleTypeTopicPopUp={handleTypeTopicPopUp}
        />
      )}
    </>
  );
}

export default NavMenu;

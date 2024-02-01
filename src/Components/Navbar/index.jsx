import React from "react";
import * as S from "./style";
import SearchSVG from "../../Images/svgs/Search.jsx";

function Navbar() {
  return (
    <S.NavbarContainer>
      <S.NavBox>
        <S.NavItem>주제</S.NavItem>
        <S.NavItem>명예의 전당</S.NavItem>
      </S.NavBox>
      <S.SearchBox>
        <SearchSVG />
        <S.SearchInput placeholder="찾으시는 스레드가 있으신가요?"></S.SearchInput>
      </S.SearchBox>
    </S.NavbarContainer>
  );
}

export default Navbar;

import React from "react";
import * as S from "./style";

function Navbar() {
  return (
    <S.NavbarContainer>
      <S.NavBox>
        <S.NavItem>주제</S.NavItem>
        <S.NavItem>명예의 전당</S.NavItem>
      </S.NavBox>
      <S.SearchBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="15" cy="15" r="8" stroke="#8C8C8C" stroke-width="2" />
          <path d="M29.2929 30.7071C29.6834 31.0976 30.3166 31.0976 30.7071 30.7071C31.0976 30.3166 31.0976 29.6834 30.7071 29.2929L29.2929 30.7071ZM20.2929 21.7071L29.2929 30.7071L30.7071 29.2929L21.7071 20.2929L20.2929 21.7071Z" fill="#8C8C8C" />
        </svg>
        <S.SearchInput placeholder="찾으시는 스레드가 있으신가요?"></S.SearchInput>
      </S.SearchBox>
    </S.NavbarContainer>
  );
}

export default Navbar;

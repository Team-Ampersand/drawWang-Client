import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 36px 0px 36px;
  gap: 357.5px;
`;

const NavBox = styled.div`
  display: flex;
  width: 293px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 160px;
`;

const NavItem = styled.p`
  font-size: 18px;
`;

const SearchBox = styled.div`
  width: 420px;
  height: 54px;
  padding: 10 20px;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 2px solid #8c8c8c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  svg {
    width: 36px;
    height: 36px;
  }
`;

const SearchInput = styled.input`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: #8c8c8c;
  letter-spacing: -0.18px;
  border: none;
  width: 100%;
  display: flex;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavBox>
        <NavItem>주제</NavItem>
        <NavItem>명예의 전당</NavItem>
      </NavBox>
      <SearchBox>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="15" cy="15" r="8" stroke="#8C8C8C" stroke-width="2" />
          <path d="M29.2929 30.7071C29.6834 31.0976 30.3166 31.0976 30.7071 30.7071C31.0976 30.3166 31.0976 29.6834 30.7071 29.2929L29.2929 30.7071ZM20.2929 21.7071L29.2929 30.7071L30.7071 29.2929L21.7071 20.2929L20.2929 21.7071Z" fill="#8C8C8C" />
        </svg>
        <SearchInput placeholder="찾으시는 스레드가 있으신가요?"></SearchInput>
      </SearchBox>
    </NavbarContainer>
  );
}

export default Navbar;

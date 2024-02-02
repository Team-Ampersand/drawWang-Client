import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 36px 0px 36px;
  gap: 357.5px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;

export const NavBox = styled.div`
  display: flex;
  width: 293px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 160px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavItem = styled.p`
  font-size: 18px;
`;

export const SearchBox = styled.div`
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

export const SearchInput = styled.input`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: #8c8c8c;
  letter-spacing: -0.18px;
  width: 100%;
  display: flex;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;

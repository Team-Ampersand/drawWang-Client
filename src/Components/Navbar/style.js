import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const SearchBox = styled.div`
  width: 420px;
  height: 54px;
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
  box-sizing: border-box;

  @media screen and (max-width: 1386px) {
    width: 350px;
  }

  @media screen and (max-width: 1200px) {
    width: 300px;
  }

  @media screen and (max-width: 1096px) {
    width: 250px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
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

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1096px) {
    &::placeholder {
      color: transparent;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const NavMenuBar = styled.div`
  display: none;
  cursor: pointer;
  margin-top: 75px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
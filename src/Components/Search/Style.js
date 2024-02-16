import styled from "styled-components";

export const SearchItem = styled.div`
  display: flex;
  width: 384px;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.22px;

  @media screen and (max-width: 1386px) {
    width: 350px;
  }

  @media screen and (max-width: 1200px) {
    width: 300px;
  }

  @media screen and (max-width: 1096px) {
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 370px;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 270px;
  }

  @media screen and (max-width: 420px) {
    width: 180px;
    font-size: 20px;
  }

  @media screen and (max-width: 320px) {
    width: 160px;
    font-size: 18px;
  }
`;

export const SearchItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  &:first-child {
    gap: 16px;
  }
`;

export const SearchBox = styled.div`
  display: grid;
  gap: 16px;
  box-sizing: border-box;
  width: 448px;
  background-color: #999;
  border-radius: 20px;
  background: #fff;
  padding: 32px;
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 1386px) {
    width: 400px;
  }

  @media screen and (max-width: 1200px) {
    width: 350px;
  }

  @media screen and (max-width: 1096px) {
    width: 300px;
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    width: 370px;
  }

  @media screen and (max-width: 576px) {
    width: 320px;
  }

  @media screen and (max-width: 480px) {
    width: 270px;
  }

  @media screen and (max-width: 420px) {
    width: 220px;
  }

  @media screen and (max-width: 320px) {
    width: 170px;
  }
`;

export const SearchBoxContainer = styled.div`
  position: absolute;
  top: 66px;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 1025px) {
    right: 40px;
    top: 40px
  }

  @media screen and (max-width: 768px) {
    right: 30px;
    top: 40px
  }

  @media screen and (max-width: 576px) {
    right: 18px;
    top: 40px
  }

  @media screen and (max-width: 420px) {
    right: 10px;
    top: 40px
  }

  @media screen and (max-width: 320px) {
    right: 25px;
    top: 40px
  }
`;

export const PopularThreadText = styled.div`
  color: var(--Gray-8c8c8c, #8c8c8c);
  font-size: 18px;
  margin: 30px 0 2px 0;
`;

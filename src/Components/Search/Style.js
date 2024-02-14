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
`;

export const SearchBoxContainer = styled.div`
  position: absolute;
  top: 66px;
  right: 0;
  z-index: 1;
`;

export const PopularThreadText = styled.div`
  color: var(--Gray-8c8c8c, #8c8c8c);
  font-size: 18px;
  margin: 30px 0 2px 0;
`;

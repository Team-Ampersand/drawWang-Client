import styled from "styled-components";

export const SelectedPictureItem = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.32px;
  padding: 0 36px;
`;

export const SlectedPictureNav = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 0%;

  @media screen and (max-width: 768px) {
    height: 110px;
    display: flex;
    align-items: center;
  }
`;

export const SelectedPictureContainer = styled.div`
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;
`;
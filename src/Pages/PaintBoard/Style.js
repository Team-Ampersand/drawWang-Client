import styled from "styled-components";
import xPng from "../../Assets/pngs/x.png";

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DrawItem = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.32px;
  padding: 0 36px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DrawFinish = styled.div`
  color: var(--P-6EC8FF, #6ec8ff);
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DrawNav = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DrawNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ToolHideImage =styled.img`
  position:absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: none;
  justify-content: center;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const MobilePaintUnavailableBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 700px;
  height: 700px;
  margin-top: 66px;
  margin-bottom: 230px;
  flex-direction: column;
`;

export const MobilePaintUnavailableImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${xPng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 520px;
    height: 520px;
  }

  @media screen and (max-width: 658px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 568px) {
    width: 300px;
    height: 300px;
  }
`;

export const MobilePaintUnavailableTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 425px;
  position: absolute;

  @media screen and (max-width: 768px) {
    margin-top: 350px;
  }

  @media screen and (max-width: 658px) {
    margin-top: 280px;
  }

  @media screen and (max-width: 568px) {
    margin-top: 200px;
  }
`;

export const MobilePaintUnavailableTitle = styled.div`
  font-size: 36px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 658px) {
    font-size: 24px;
  }

  @media screen and (max-width: 568px) {
    font-size: 18px;
  }
`;

export const MobilePaintUnavailableDesc = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #737373;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 658px) {
    font-size: 14px;
  }

  @media screen and (max-width: 568px) {
    font-size: 10px;
  }
  
`;

import styled from "styled-components";
import MedalPng from "../../Assets/pngs/Medal.png";
import { BlueCircleSVG, GrayCircleSVG } from "../../Assets/svgs";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const HallOfFameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 700px;
  height: 700px;
  border: 0;
  outline: none;
  margin-top: 66px;
  margin-bottom: 230px;
  flex-direction: column;
`;

export const HallOfFameMainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HallOfFameContainer = styled.div`
  display: flex;
  padding: 0 80px;
  margin-left: 80px;
  width: 100%;
  position: fixed;

  @media screen and (min-width: 769px) {
    gap: 100px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0px;
    height: calc(100vh - 170px);
    padding-top: 40px;
    margin-bottom: 20px;
    margin-top: 30px;
    overflow-y: scroll;
    position: static;
    overflow-x: hidden;
  }
`;

export const HallOfFameThreadBoxTitle = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.48px;
  position: absolute;
  top: 16%;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    position: absolute;
    top: 47px;
  }
`;

export const HallOfFameImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${MedalPng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
`;

export const HallOfFameTextBox = styled.div`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 520px;
  position: absolute;
`;

export const HallOfFameTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const HallOfFameDesc = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #737373;
`;

export const SelectDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90%;
  gap: 20px;

  @media screen and (max-widht: 768px) {
    display: none !important;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SelectDateText = styled.div`
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SwipeRightArrowButton = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const SwipeLeftArrowButton = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

import styled from "styled-components";
import MedalPng from "../../Images/imgs/Medal.png";

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
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 90%;
  gap: 8px;
`;

export const SelectDateText = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

margin-right:20px;
`; 

export const SelectCircle =styled.div`

  margin-bottom: 10px;
  display: flex;
content: "";
    width: 8px;
    height: 8px;
    `;
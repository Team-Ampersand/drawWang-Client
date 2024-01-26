import styled from "styled-components";
import ServiceUnavailablePng from "../Images/ServiceUnavailable.png";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const ServiceUnavailableBox = styled.div`
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

export const ServiceUnavailableImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${ServiceUnavailablePng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
`;

export const ServiceUnavailableTextBox = styled.div`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 300px;
  position: absolute;
`;

export const ServiceUnavailableTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const ServiceUnavailableDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #8c8c8c;
`;

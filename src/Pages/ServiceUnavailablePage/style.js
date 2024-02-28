import styled from "styled-components";
import ServiceUnavailablePng from "../../Assets/pngs/ServiceUnavailable.png";

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
  margin-top: 66px;
  margin-bottom: 230px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 650px;
    height: 650px;
  }

  @media screen and (max-width: 686px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 576px) {
    width: 400px;
    height: 400px;
  }
`;

export const ServiceUnavailableImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${ServiceUnavailablePng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 520px;
    height: 520px;
  }

  @media screen and (max-width: 686px) {  
    width: 400px;
    height: 400px;
  }
`;

export const ServiceUnavailableTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 300px;
  position: absolute;

  @media screen and (max-width: 768px) {
    margin-top: 250px;
  }

  @media screen and (max-width: 686px) {
    margin-top: 200px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 165px;
  }
`;

export const ServiceUnavailableTitle = styled.div`
  font-size: 48px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 686px) {
    font-size: 30px;
  }

  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ServiceUnavailableDesc = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #737373;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 686px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

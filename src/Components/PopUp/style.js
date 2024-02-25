import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavMenuBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(64, 64, 64, 0.5);
  backdrop-filter: blur(10px);
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const NavMenuContainer = styled.div`
  width: 75%;
  height: 100%;
  background-color: white;
  z-index: 6;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const NavMenuSearchBox = styled.div`
  width: 420px;
  height: 40px;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 2px solid #8c8c8c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 7;

  svg {
    width: 36px;
    height: 36px;
  }

  @media screen and (min-width: 1023px) {
    display: none;
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

export const NavMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 60px;
  z-index: 6;
  margin-top: 60px;

  @media screen and (max-width: 1025px) {
    width: 370px;
  }
  
  @media screen and (max-width: 768px) {
    width: 320px;
  }

  @media screen and (max-width: 576px) {
    width: 270px;
  }

  @media screen and (max-width: 480px) {
    width: 220px;
  }

  @media screen and (max-width: 420px) {
    width: 170px;
  }

  @media screen and (max-width: 320px) {
    width: 120px;
  }
`;

export const NavMenuLi = styled(Link)`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.18px; 
  color: black;
  cursor: pointer;
  z-index: 7;
  list-style: none;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavMenuSearchInput = styled.input`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: #8c8c8c;
  letter-spacing: -0.18px;
  width: 100%;
  display: flex;
  z-index: 7;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8c8c8c;
  }
  
  @media screen and (min-width: 1023px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    &::placeholder {
      color: transparent;
    }
  }
`;

export const NavMenuSearchContainer = styled.div`
  position: relative;
  z-index: 7;
  margin-top: 72px;
`;

export const CreateThreadText = styled.footer`
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  margin-bottom: 3.5vh;
  letter-spacing: -0.22px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media screen and (max-width: 376px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const CreateThreadButtonText = styled.span`
  font-size: 18px;
  color: #5d9bff;
  letter-spacing: -0.22px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 376px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const PopUpBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(64, 64, 64, 0.5);
  z-index: 1;

  @media screen and (max-width: 1025px) {
    z-index: 7;
  }
`;

export const TypeTopicPopUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  width: 460px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  z-index: 100;

  @media screen and (max-width: 1025px) {
    width: 390px;
    height: 260px;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 220px;
  }

  @media screen and (max-width: 376px) {
    width: 280px;
    height: 180px;
  }
`;

export const TypeTopicPopUpTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  margin-bottom: 26px;

  @media screen and (max-width: 1025px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 376px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const TypeTopicPopUpInput = styled.input`
  display: flex;
  width: 280px;
  height: 50px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  margin-bottom: 62px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.22px;

  &.error {
    border: 1px solid #ff3131;
  }

  @media screen and (max-width: 1025px) {
    width: 270px;
    height: 38px;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    width: 240px;
    height: 34px;
    font-size: 16px;
    margin-bottom: 42px;
  }

  @media screen and (max-width: 376px) {
    width: 200px;
    height: 30px;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
  color: #ff3131;
  position: absolute;
  margin-top: 50px;
  margin-right: 120px;

  @media screen and (max-width: 1025px) {
    margin-top: 35px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 42px;
    margin-right: 100px;
  }

  @media screen and (max-width: 376px) {
    margin-top: 40px;
    margin-right: 80px;
  }
`;

export const TypeTopicPopUpButton = styled.div`
  display: flex;
  width: 120px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: #d9d9d9;
  cursor: pointer;
  color: white;

  &.active {
    background-color: #5d9bff;
  }

  @media screen and (max-width: 1025px) {
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;

export const ReportPicturePopUpBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(64, 64, 64, 0.5);
  z-index: 2;
`;

export const ReportPicturePopUp = styled.div`
  width: 520px;
  height: 430px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 684px) {
    width: 420px;
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
    height: 270px;
  }
`;

export const ReportPicturePopUpReportTypeButtonWrapper = styled.div`
  display: flex;
  width: 240px;
  height: 48px;
  background-color: #d9d9d9;
  backdrop-filter: blur(10px);
  border-radius: 14px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 684px) {
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 160px;
    height: 32px;
    margin-top: 10px;
  }
`;

export const ReportPicturePopUpReportTypeButton = styled.div`
  width: 118px;
  height: 44px;
  border-radius: 14px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.18px;
  color: #8c8c8c;

  &.active {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 684px) {
    width: 100px;
    height: 36px;
    border-radius: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 30px;
  }
`;

export const ReportPicturePopUpReportInputBox = styled.input`
  display: flex;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.22px;
  padding: 16px 20px;
  gap: 10px;
  color: #000;
  width: 420px;
  height: 200px;
  border: 2px solid #d9d9d9;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "AppleSDGothicNeoM00", sans-serif;
  resize: none;

  &::placeholder {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.22px;
    color: #8c8c8c;
  }

  @media screen and (max-width: 684px) {
    width: 320px;
    height: 160px;
  }

  @media screen and (max-width: 480px) {
    width: 220px;
    height: 120px;
  }
`;

export const ReportPicturePopUpSubmitButton = styled.div`
  width: 120px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #5d9bff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.18px;

  @media screen and (max-width: 684px) {
    width: 100px;
    height: 36px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 30px;
    margin-bottom: 10px;
  }
`;

export const FilterPopUpContainer = styled.div`
  width: 164px;
  height: 64px;
  background-color: white;
  position: absolute;
  border-radius: 12px;
  top: 160px;
  right: 50px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SelectFilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SelectFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

export const SelectFilterText = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
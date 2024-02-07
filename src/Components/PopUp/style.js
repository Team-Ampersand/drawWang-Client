import styled from "styled-components";

export const PopUpBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(64, 64, 64, 0.5);
  z-index: 1;
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
`;

export const TypeTopicPopUpTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  margin-bottom: 32px;
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
`;

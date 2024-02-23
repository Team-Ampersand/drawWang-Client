import styled from "styled-components";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const TopicsMainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopicsContainer = styled.div`
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
    margin-top: 70px;
    overflow-y: scroll;
    position: static;
    overflow-x: hidden;
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
`;

export const ThreadNotFoundBox = styled.div`
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

export const ThreadNotFoundTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 520px;
  position: absolute;
`;

export const ThreadNotFoundTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const ThreadNotFoundDesc = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #737373;
`;

export const CreateThreadText = styled.footer`
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  margin-bottom: 3.5vh;
  letter-spacing: -0.22px;

  @media screen and (max-width: 768px) {
    display: none;
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

  @media screen and (max-width: 768px) {
    display: none;
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

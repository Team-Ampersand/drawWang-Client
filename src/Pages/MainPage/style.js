import styled from "styled-components";
import { SwipeRightArrowSVG } from "../../Assets/svgs";

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
  gap: 100px;
  padding: 0 80px;
  margin-left: 80px;
  width: 100%;
  position: fixed;
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
`;

export const CreateThreadButtonText = styled.span`
  font-size: 18px;
  color: #5d9bff;
  letter-spacing: -0.22px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
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
`;

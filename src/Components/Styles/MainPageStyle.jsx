import styled from "styled-components";
import SketchPng from "../Images/Sketch.png";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const ThreadNotFoundBox = styled.div`
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

export const ThreadNotFoundImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${SketchPng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
`;

export const ThreadNotFoundTextBox = styled.div`
  border: none;
  outline: none;
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

import styled from "styled-components";
import SketchPng from "../Images/Sketch.png";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThreadNotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  border: 0;
  outline: none;
`;

export const ThreadNotFoundImg = styled.img`
  width: 640px;
  height: 640px;
  background-image: url(${SketchPng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none; // border 초기화
  outline: none; // outline 초기화
`;

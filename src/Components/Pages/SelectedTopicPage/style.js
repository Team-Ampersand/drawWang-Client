import styled from "styled-components";

export const SelectedTopicTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 66px;
  position: absolute;
  z-index: 2;
  top: 5%;
`;

export const SelectedTopicName = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.48px;
  z-index: 2;
`;

export const SelectedTopicTimeLeftText = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #8c8c8c;
  z-index: 2;
`;

export const SelectedTopicContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;
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

export const TopicsContainer = styled.div`
  display: flex;
  gap: 100px;
  padding: 0 80px;
  margin-left: 80px;
  width: 100%;
  position: fixed;
`;

export const SelectFilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90%;
  gap: 20px;
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

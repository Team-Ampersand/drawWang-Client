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

  @media screen and (max-width: 768px) {
    top: -15px;
  }
`;

export const SelectedTopicName = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.48px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SelectedTopicTimeLeftText = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.26px;
  color: #8c8c8c;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SelectedTopicContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    height: calc(100vh - 180px);
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

export const TopicsContainer = styled.div`
  display: flex;
  padding: 20px 80px;
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
    height: calc(100vh - 180px);
    margin-top: 20px;
    overflow-y: scroll;
    position: static;
    width: 100vw;
    overflow-x: hidden;
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

export const TopTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;
  right: 22px;
`;

export const DrawNewPictureButton = styled.div`
  width: 52px;
  height: 52px; 
  border-radius: 50%;
  position: absolute;
  right: 4%;
  bottom: 4%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`


export const ChevronLeftSVGBox = styled.div`
  cursor: pointer;
`;

export const FilterPictureButton = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 54px;
    right: 11vw;
    display: block;
  }

  @media screen and (max-width: 684px) {
    right: 12vw
  }

  @media screen and (max-width: 600px) {
    right: 13vw;
  }

  @media screen and (max-width: 576px) {
    right: 14vw;
  }

  @media screen and (max-width: 540px) {
    right: 15vw;
  }

  @media screen and (max-width: 500px) {
    right: 16vw;
  }

  @media screen and (max-width: 460px) {
    right: 17vw;
  }

  @media screen and (max-width: 420px) {
    right: 18vw;
  }

  @media screen and (max-width: 380px) {
    right: 19vw;
  }

  @media screen and (max-width: 340px) {
    right: 20vw;
  }

  @media screen and (max-width: 300px) {
    right: 21vw;
  }
`;
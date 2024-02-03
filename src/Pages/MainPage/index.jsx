import Navbar from "../../Components/Navbar";
import * as s from "./style";
import React, { useState } from "react";
import TopicBox from "../../Components/ThreadBox/topic";
import PictureBox from "../../Components/ThreadBox/picture";
import CreateNewBox from "../../Components/ThreadBox/createnew";
import SketchPng from "../../Assets/pngs/Sketch.png";
import {
  SwipeRightArrowSVG,
  SwipeLeftArrowSVG,
  BlueCircleSVG,
  GrayCircleSVG,
} from "../../Assets/svgs";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [topicsExist, setTopicsExist] = useState(true);
  const [slidePx, setSlidePx] = useState(0); // 추후 서버에서 받아온 데이터로 변경
  const [typeTopicPopUpEnabled, setTypeTopicPopUpEnabled] = useState(false); // 추후 서버에서 받아온 데이터로 변경
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false); // 추후 서버에서 받아온 데이터로 변경
  const [topics, setTopics] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("like");

  const handleSwipeRight = () => {
    const newSlidePx = slidePx - 1200;
    setSlidePx(newSlidePx);
  };

  const handleSwipeLeft = () => {
    const newSlidePx = slidePx + 1200;
    setSlidePx(newSlidePx);
  };

  const handleTypeTopicPopUp = () => {
    setTypeTopicPopUpEnabled(!typeTopicPopUpEnabled);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const testFunc = () => {
    setSameTopicAlreadyExist(!sameTopicAlreadyExist);
  };

  const handleArrowClick = () => {
    setTopics("학교");
  };

  return (
    <>
      <Navbar />
      {topicsExist ? (
        <>
          <s.TopicsMainContainer>
            <s.TopicsContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <TopicBox onArrowClick={handleArrowClick} />
              <TopicBox />
              <TopicBox />
              <TopicBox />
              <TopicBox />
            </s.TopicsContainer>
            {/* 토픽이 "학교" 면 렌더링할 페이지 */}
            {topics === "학교" && (
              <s.SelectedTopicContainer>
                <s.SelectedTopicTitleBox>
                  <s.SelectedTopicName>학교</s.SelectedTopicName>
                  <s.SelectedTopicTimeLeftText>
                    13:25:17
                  </s.SelectedTopicTimeLeftText>
                </s.SelectedTopicTitleBox>
                <s.TopicsContainer
                  style={{
                    transform: `translateX(${slidePx}px)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <CreateNewBox />
                  <PictureBox />
                  <PictureBox />
                  <PictureBox />
                  <PictureBox />
                  <PictureBox />
                </s.TopicsContainer>
                <s.SwipeRightArrowButton
                  onClick={handleSwipeRight}
                  style={{ display: slidePx <= -1500 ? "none" : "flex" }} // 추후 서버에서 받아온 데이터로 변경
                >
                  <SwipeRightArrowSVG />
                </s.SwipeRightArrowButton>
                <s.SwipeLeftArrowButton
                  onClick={handleSwipeLeft}
                  style={{ display: slidePx >= 0 ? "none" : "flex" }}
                >
                  <SwipeLeftArrowSVG />
                </s.SwipeLeftArrowButton>
                <s.SelectFilterBox>
                  <s.SelectFilterWrapper
                    onClick={() => setSelectedFilter("like")}
                  >
                    {selectedFilter === "like" ? (
                      <BlueCircleSVG />
                    ) : (
                      <GrayCircleSVG />
                    )}
                    <s.SelectFilterText
                      className={selectedFilter === "like" ? "active" : ""}
                      onClick={() => setSelectedFilter("like")}
                    >
                      오늘
                    </s.SelectFilterText>
                  </s.SelectFilterWrapper>
                  <s.SelectFilterWrapper
                    onClick={() => setSelectedFilter("date")}
                  >
                    {selectedFilter === "date" ? (
                      <BlueCircleSVG />
                    ) : (
                      <GrayCircleSVG />
                    )}
                    <s.SelectFilterText
                      className={selectedFilter === "date" ? "active" : ""}
                    >
                      전체
                    </s.SelectFilterText>
                  </s.SelectFilterWrapper>
                </s.SelectFilterBox>
              </s.SelectedTopicContainer>
            )}
            <s.CreateThreadText>
              찾으시는 스레드가 없나요?{" "}
              <s.CreateThreadButtonText onClick={handleTypeTopicPopUp}>
                스레드 만들기
              </s.CreateThreadButtonText>
            </s.CreateThreadText>
            <s.SwipeRightArrowButton
              onClick={handleSwipeRight}
              style={{ display: slidePx <= -1500 ? "none" : "flex" }} // 추후 서버에서 받아온 데이터로 변경
            >
              <SwipeRightArrowSVG />
            </s.SwipeRightArrowButton>
            <s.SwipeLeftArrowButton
              onClick={handleSwipeLeft}
              style={{ display: slidePx >= 0 ? "none" : "flex" }}
            >
              <SwipeLeftArrowSVG />
            </s.SwipeLeftArrowButton>
          </s.TopicsMainContainer>
          {typeTopicPopUpEnabled && (
            <>
              <s.PopUpBackground onClick={handleTypeTopicPopUp} />
              <s.TypeTopicPopUpContainer>
                <s.TypeTopicPopUpTitle>
                  주제를 입력해주세요
                </s.TypeTopicPopUpTitle>
                <s.TypeTopicPopUpInput
                  value={inputValue}
                  onChange={handleInputChange}
                  className={sameTopicAlreadyExist ? "error" : ""}
                />
                {sameTopicAlreadyExist && (
                  <s.ErrorMessage>이미 존재하는 스레드입니다.</s.ErrorMessage>
                )}
                <s.TypeTopicPopUpButton
                  onClick={testFunc}
                  className={inputValue ? "active" : ""}
                >
                  확인
                </s.TypeTopicPopUpButton>
              </s.TypeTopicPopUpContainer>
            </>
          )}
        </>
      ) : (
        <s.MainContainer>
          <s.ThreadNotFoundBox>
            <img src={SketchPng} width="660px" height="660px" alt="Sketch" />
            <s.ThreadNotFoundTextBox>
              <s.ThreadNotFoundTitle>스레드가 없어요</s.ThreadNotFoundTitle>
              <s.ThreadNotFoundDesc>
                처음으로 스레드를 만들어보세요!
              </s.ThreadNotFoundDesc>
            </s.ThreadNotFoundTextBox>
          </s.ThreadNotFoundBox>
          <s.CreateThreadText>
            찾으시는 스레드가 없나요?{" "}
            <s.CreateThreadButtonText>스레드 만들기</s.CreateThreadButtonText>
          </s.CreateThreadText>
        </s.MainContainer>
      )}
    </>
  );
}

export default MainPage;

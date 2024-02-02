import Navbar from "../../Components/Navbar";
import * as s from "./style";
import React, { useState } from "react";
import ThreadBox from "../../Components/ThreadBox";
import SketchPng from "../../Assets/pngs/Sketch.png";
import { SwipeRightArrowSVG, SwipeLeftArrowSVG } from "../../Assets/svgs";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [topicsExist, setTopicsExist] = useState(true);
  const [slidePx, setSlidePx] = useState(0);
  const [typeTopicPopUpEnabled, setTypeTopicPopUpEnabled] = useState(false);
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false);

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
              <ThreadBox />
              <ThreadBox />
              <ThreadBox />
              <ThreadBox />
              <ThreadBox />
            </s.TopicsContainer>
            <s.CreateThreadText>
              찾으시는 스레드가 없나요?{" "}
              <s.CreateThreadButtonText onClick={handleTypeTopicPopUp}>
                스레드 만들기
              </s.CreateThreadButtonText>
            </s.CreateThreadText>
            <s.SwipeRightArrowButton
              onClick={handleSwipeRight}
              style={{ display: slidePx <= -1500 ? "none" : "flex" }}
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

import Navbar from "../../Components/Navbar";
import * as s from "./style";
import React, { useState } from "react";
import TopicBox from "../../Components/ThreadBox/topic";
import SketchPng from "../../Assets/pngs/Sketch.png";
import { SwipeRightArrowSVG, SwipeLeftArrowSVG } from "../../Assets/svgs";
import SelectedTopicPage from "../../Components/Pages/SelectedTopicPage";
import CreateThread from "../../Components/PopUp/createthread";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [topicsExist, setTopicsExist] = useState(true);
  const [slidePx, setSlidePx] = useState(0); // 추후 서버에서 받아온 데이터로 변경
  const [typeTopicPopUpEnabled, setTypeTopicPopUpEnabled] = useState(false); // 추후 서버에서 받아온 데이터로 변경
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false); // 추후 서버에서 받아온 데이터로 변경
  const [topics, setTopics] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("like");
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [reportPopUpEnabled, setReportPopUpEnabled] = useState(false);
  const [reportType, setReportType] = useState("topic");

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

  const handleTopicArrowClick = () => {
    setTopics("학교");
  };

  const handlePictureArrowClick = () => {
    setSelectedPicture(1);
  };

  const handleClosePicture = () => {
    setSelectedPicture(null);
  };

  const handleReportPopUp = () => {
    setReportPopUpEnabled(!reportPopUpEnabled);
  };

  const handleReportTypeTopicButtonClick = () => {
    setReportType("topic");
  };

  const handleReportTypePictureButtonClick = () => {
    setReportType("picture");
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
              <TopicBox onTopicArrowClick={handleTopicArrowClick} />
              <TopicBox />
              <TopicBox />
              <TopicBox />
              <TopicBox />
            </s.TopicsContainer>
            {/* 토픽이 학교면 열리는 페이지 SelectedTopicPage */}
            {topics === "학교" && (
              <SelectedTopicPage
                topics={topics}
                slidePx={slidePx}
                selectedPicture={selectedPicture}
                handlePictureArrowClick={handlePictureArrowClick}
                handleClosePicture={handleClosePicture}
                handleReportPopUp={handleReportPopUp}
                reportPopUpEnabled={reportPopUpEnabled}
                reportType={reportType}
                handleReportTypeTopicButtonClick={
                  handleReportTypeTopicButtonClick
                }
                handleReportTypePictureButtonClick={
                  handleReportTypePictureButtonClick
                }
                handleSwipeRight={handleSwipeRight}
                handleSwipeLeft={handleSwipeLeft}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
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
          {/* 스레드 만들기 눌리면 열리는 팝업 */}
          {typeTopicPopUpEnabled && (
            <>
              <CreateThread
                inputValue={inputValue}
                sameTopicAlreadyExist={sameTopicAlreadyExist}
                handleInputChange={handleInputChange}
                testFunc={testFunc}
                handleTypeTopicPopUp={handleTypeTopicPopUp}
              />
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

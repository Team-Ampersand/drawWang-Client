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
  const [slidePx, setSlidePx] = useState(0);
  const [typeTopicPopUpEnabled, setTypeTopicPopUpEnabled] = useState(false);
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false);
  const [topics, setTopics] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("like");
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [reportPopUpEnabled, setReportPopUpEnabled] = useState(false);
  const [reportType, setReportType] = useState("topic");
  const [topicsContainerVisible, setTopicsContainerVisible] = useState(true);
  const NumberOfThread = 6;
  const SlideWidth = 740 * NumberOfThread;

  const handleSwipeRight = () => {
    const newSlidePx = slidePx - 650;
    setSlidePx(newSlidePx < -SlideWidth ? -SlideWidth : newSlidePx);
  };

  const handleSwipeLeft = () => {
    const newSlidePx = slidePx + 650;
    setSlidePx(newSlidePx > 0 ? 0 : newSlidePx);
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
    setTopicsContainerVisible(false);
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
      {NumberOfThread ? (
        <>
          <s.TopicsMainContainer>
            <s.TopicsContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
                display: topicsContainerVisible ? "flex" : "none",
              }}
            >
              {Array.from({ length: NumberOfThread }).map(() => (
                <TopicBox onTopicArrowClick={handleTopicArrowClick} />
              ))}
            </s.TopicsContainer>
            <s.CreateThreadText>
              찾으시는 스레드가 없나요?{" "}
              <s.CreateThreadButtonText onClick={handleTypeTopicPopUp}>
                스레드 만들기
              </s.CreateThreadButtonText>
            </s.CreateThreadText>
            <s.SwipeRightArrowButton
              onClick={handleSwipeRight}
              style={{
                display: slidePx <= -SlideWidth + 1200 ? "none" : "flex",
              }}
            >
              <SwipeRightArrowSVG />
            </s.SwipeRightArrowButton>
            <s.SwipeLeftArrowButton
              onClick={handleSwipeLeft}
              style={{ display: slidePx >= 0 ? "none" : "flex" }}
            >
              <SwipeLeftArrowSVG />
            </s.SwipeLeftArrowButton>
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
                setTopics={setTopics}
                setTopicsContainerVisible={setTopicsContainerVisible}
              />
            )}
          </s.TopicsMainContainer>
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

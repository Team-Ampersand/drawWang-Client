import React from "react";
import * as s from "./style";
import TopicPicturePage from "../TopicPicturePage";
import PictureBox from "../../ThreadBox/picture";
import CreateNewBox from "../../ThreadBox/createnew";
import { BlueCircleSVG, GrayCircleSVG, SwipeRightArrowSVG, SwipeLeftArrowSVG, ChevronLeftSVG } from "../../../Assets/svgs";
import ThreadPictureNull from "../../ThreadPictureNull";
const SelectedTopic = ({
  topics,
  slidePx,
  selectedPicture,
  handlePictureArrowClick,
  handleClosePicture,
  handleReportPopUp,
  reportPopUpEnabled,
  reportType,
  handleReportTypeTopicButtonClick,
  handleReportTypePictureButtonClick,
  handleSwipeRight,
  handleSwipeLeft,
  selectedFilter,
  setSelectedFilter,
}) => {
  const NumberOfPictures = 10; // 0이면 ThreadPictureNull
  const SlideWidth = 740 * NumberOfPictures;

  return (
    topics === "학교" && (
      <s.SelectedTopicContainer>
        <s.SelectedTopicTitleBox>
          <s.TopTitleContainer>
            <ChevronLeftSVG /> 
            <s.SelectedTopicName>학교</s.SelectedTopicName>
          </s.TopTitleContainer>
          <s.SelectedTopicTimeLeftText>13:25:17</s.SelectedTopicTimeLeftText>
        </s.SelectedTopicTitleBox>
        {NumberOfPictures ? (
          <>
            <s.TopicsContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CreateNewBox />
              {Array.from({ length: NumberOfPictures }).map((_, index) => (
                <PictureBox key={index} onPictureArrowClick={handlePictureArrowClick} />
              ))}
            </s.TopicsContainer>
            {/* 선택된 스레드가 1번이면 열릴 페이지 topicpicturepage */}
            {selectedPicture === 1 && (
              <TopicPicturePage
                handleClosePicture={handleClosePicture}
                handleReportPopUp={handleReportPopUp}
                reportPopUpEnabled={reportPopUpEnabled}
                reportType={reportType}
                handleReportTypeTopicButtonClick={handleReportTypeTopicButtonClick}
                handleReportTypePictureButtonClick={handleReportTypePictureButtonClick}
              />
            )}
            <s.SwipeRightArrowButton onClick={handleSwipeRight} style={{ display: slidePx <= -SlideWidth + 1200 ? "none" : "flex" }}>
              <SwipeRightArrowSVG />
            </s.SwipeRightArrowButton>
            <s.SwipeLeftArrowButton onClick={handleSwipeLeft} style={{ display: slidePx >= 0 ? "none" : "flex" }}>
              <SwipeLeftArrowSVG />
            </s.SwipeLeftArrowButton>
            <s.SelectFilterBox>
              <s.SelectFilterWrapper onClick={() => setSelectedFilter("like")}>
                {selectedFilter === "like" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectFilterText className={selectedFilter === "like" ? "active" : ""} onClick={() => setSelectedFilter("like")}>
                  오늘
                </s.SelectFilterText>
              </s.SelectFilterWrapper>
              <s.SelectFilterWrapper onClick={() => setSelectedFilter("date")}>
                {selectedFilter === "date" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectFilterText className={selectedFilter === "date" ? "active" : ""}>전체</s.SelectFilterText>
              </s.SelectFilterWrapper>
            </s.SelectFilterBox>
          </>
        ) : (
          <ThreadPictureNull />
        )}
      </s.SelectedTopicContainer>
    )
  );
};

export default SelectedTopic;

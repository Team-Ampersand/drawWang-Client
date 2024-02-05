import React from "react";
import * as s from "./style";
import TopicPicturePage from "../TopicPicturePage";
import PictureBox from "../../ThreadBox/picture";
import CreateNewBox from "../../ThreadBox/createnew";
import { SwipeRightArrowSVG, SwipeLeftArrowSVG } from "../../../Assets/svgs";
import { BlueCircleSVG, GrayCircleSVG } from "../../../Assets/svgs";

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
  return (
    topics === "학교" && (
      <s.SelectedTopicContainer>
        <s.SelectedTopicTitleBox>
          <s.SelectedTopicName>학교</s.SelectedTopicName>
          <s.SelectedTopicTimeLeftText>13:25:17</s.SelectedTopicTimeLeftText>
        </s.SelectedTopicTitleBox>
        <s.TopicsContainer
          style={{
            transform: `translateX(${slidePx}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <CreateNewBox />
          <PictureBox onPictureArrowClick={handlePictureArrowClick} />
          <PictureBox />
          <PictureBox />
          <PictureBox />
          <PictureBox />
        </s.TopicsContainer>
        {/* 선택된 스레드가 1번이면 열릴 페이지 topicpicturepage */}
        {selectedPicture === 1 && (
          <TopicPicturePage
            handleClosePicture={handleClosePicture}
            handleReportPopUp={handleReportPopUp}
            reportPopUpEnabled={reportPopUpEnabled}
            reportType={reportType}
            handleReportTypeTopicButtonClick={handleReportTypeTopicButtonClick}
            handleReportTypePictureButtonClick={
              handleReportTypePictureButtonClick
            }
          />
        )}
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
        <s.SelectFilterBox>
          <s.SelectFilterWrapper onClick={() => setSelectedFilter("like")}>
            {selectedFilter === "like" ? <BlueCircleSVG /> : <GrayCircleSVG />}
            <s.SelectFilterText
              className={selectedFilter === "like" ? "active" : ""}
              onClick={() => setSelectedFilter("like")}
            >
              오늘
            </s.SelectFilterText>
          </s.SelectFilterWrapper>
          <s.SelectFilterWrapper onClick={() => setSelectedFilter("date")}>
            {selectedFilter === "date" ? <BlueCircleSVG /> : <GrayCircleSVG />}
            <s.SelectFilterText
              className={selectedFilter === "date" ? "active" : ""}
            >
              전체
            </s.SelectFilterText>
          </s.SelectFilterWrapper>
        </s.SelectFilterBox>
      </s.SelectedTopicContainer>
    )
  );
};

export default SelectedTopic;

import React, { useState } from "react";
import * as s from "./style";
import TopicPicturePage from "../TopicPicturePage";
import PictureBox from "../../ThreadBox/picture";
import CreateNewBox from "../../ThreadBox/createnew";
import { Link } from "react-router-dom";
import {
  BlueCircleSVG,
  GrayCircleSVG,
  SwipeRightArrowSVG,
  SwipeLeftArrowSVG,
  ChevronLeftSVG,
  FilterSVG,
  NavPlusSVG,
} from "../../../Assets/svgs";
import ThreadPictureNull from "../../ThreadPictureNull";
import FilterPopup from "../../PopUp/filter"; // 필터 팝업 컴포넌트 임포트

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
  setTopics,
  setTopicsContainerVisible,
}) => {
  const NumberOfPictures = 10;
  const SlideWidth = 740 * NumberOfPictures;
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false); // 필터 팝업의 열림/닫힘 상태를 관리

  const handleChevronLeftClick = () => {
    setTopics("");
    setTopicsContainerVisible(true);
  };

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen); // 필터 팝업의 열림/닫힘 상태를 토글
  };

  const closeFilterPopup = () => {
    setIsFilterPopupOpen(false); // 필터 팝업 닫기
  };

  return (
    topics === "학교" && (
      <s.SelectedTopicContainer>
        <s.DrawNewPictureButton>
          <Link to="/board">
            <NavPlusSVG />
          </Link>
        </s.DrawNewPictureButton>
        <s.FilterPictureButton onClick={toggleFilterPopup}>
          <FilterSVG />
        </s.FilterPictureButton>
        {isFilterPopupOpen /* 필터 팝업이 열려 있을 때만 렌더링 */ && (
          <FilterPopup
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            closePopup={closeFilterPopup}
          />
        )}
        <s.SelectedTopicTitleBox>
          <s.TopTitleContainer>
            <s.ChevronLeftSVGBox onClick={handleChevronLeftClick}>
              <ChevronLeftSVG />
            </s.ChevronLeftSVGBox>
            <s.SelectedTopicName>학교</s.SelectedTopicName>
          </s.TopTitleContainer>
          <s.SelectedTopicTimeLeftText>13:25:17</s.SelectedTopicTimeLeftText>
        </s.SelectedTopicTitleBox>
        {NumberOfPictures ? (
          <>
            {selectedPicture !== 1 && (
              <s.TopicsContainer
                style={{
                  transform: `translateX(${slidePx}px)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Link to="/board">
                  <CreateNewBox />
                </Link>
                {Array.from({ length: NumberOfPictures }).map((_, index) => (
                  <PictureBox
                    key={index}
                    onPictureArrowClick={handlePictureArrowClick}
                  />
                ))}
              </s.TopicsContainer>
            )}
            {/* 선택된 스레드가 1번이면 열릴 페이지 topicpicturepage */}
            {selectedPicture === 1 && (
              <TopicPicturePage
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
              />
            )}
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
            <s.SelectFilterBox>
              <s.SelectFilterWrapper onClick={() => setSelectedFilter("like")}>
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
              <s.SelectFilterWrapper onClick={() => setSelectedFilter("date")}>
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
          </>
        ) : (
          <ThreadPictureNull />
        )}
      </s.SelectedTopicContainer>
    )
  );
};

export default SelectedTopic;

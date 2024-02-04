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
  ReportSVG,
} from "../../Assets/svgs";
import { useEffect } from "react";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
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

  // state의 어떤 값이던 변경되면 콘솔에 출력
  useEffect(() => {
    console.log("topicsExist:", topicsExist);
  }, [topicsExist]);

  useEffect(() => {
    console.log("slidePx:", slidePx);
  }, [slidePx]);

  useEffect(() => {
    console.log("typeTopicPopUpEnabled:", typeTopicPopUpEnabled);
  }, [typeTopicPopUpEnabled]);

  useEffect(() => {
    console.log("sameTopicAlreadyExist:", sameTopicAlreadyExist);
  }, [sameTopicAlreadyExist]);

  useEffect(() => {
    console.log("topics:", topics);
  }, [topics]);

  useEffect(() => {
    console.log("selectedFilter:", selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {
    console.log("selectedPicture:", selectedPicture);
  }, [selectedPicture]);

  useEffect(() => {
    console.log("reportPopUpEnabled:", reportPopUpEnabled);
  }, [reportPopUpEnabled]);

  useEffect(() => {
    console.log("reportType:", reportType);
  }, [reportType]);

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
                  <PictureBox onPictureArrowClick={handlePictureArrowClick} />
                  <PictureBox />
                  <PictureBox />
                  <PictureBox />
                  <PictureBox />
                </s.TopicsContainer>
                {/* 1번 사진이 선택되면 렌더링할 페이지 */}
                {selectedPicture === 1 && (
                  <>
                    <s.SelectedPictureContainer>
                      <s.SlectedPictureNav>
                        <s.SelectedPictureItem
                          style={{ cursor: "pointer" }}
                          onClick={handleClosePicture}
                        >
                          <SwipeLeftArrowSVG />
                        </s.SelectedPictureItem>
                        <s.SelectedPictureItem>학교</s.SelectedPictureItem>
                        <s.SelectedPictureItem
                          style={{ cursor: "pointer" }}
                          onClick={handleReportPopUp}
                        >
                          <ReportSVG />
                        </s.SelectedPictureItem>
                      </s.SlectedPictureNav>
                    </s.SelectedPictureContainer>
                    {reportPopUpEnabled && (
                      <>
                        <s.ReportPicturePopUpBackground
                          onClick={handleReportPopUp}
                        ></s.ReportPicturePopUpBackground>
                        <s.ReportPicturePopUp>
                          <s.ReportPicturePopUpReportTypeButtonWrapper>
                            <s.ReportPicturePopUpReportTypeButton
                              className={reportType === "topic" ? "active" : ""}
                              onClick={handleReportTypeTopicButtonClick}
                            >
                              주제
                            </s.ReportPicturePopUpReportTypeButton>
                            <s.ReportPicturePopUpReportTypeButton
                              className={
                                reportType === "picture" ? "active" : ""
                              }
                              onClick={handleReportTypePictureButtonClick}
                            >
                              그림
                            </s.ReportPicturePopUpReportTypeButton>
                          </s.ReportPicturePopUpReportTypeButtonWrapper>
                          {/* PlaceHolder 추가 */}
                          <s.ReportPicturePopUpReportInputBox
                            as="textarea"
                            placeholder={"내용을 입력해주세요."}
                            rows={10} // 원하는 줄 수로 설정
                          />
                          <s.ReportPicturePopUpSubmitButton>
                            확인
                          </s.ReportPicturePopUpSubmitButton>
                        </s.ReportPicturePopUp>
                      </>
                    )}
                  </>
                )}
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

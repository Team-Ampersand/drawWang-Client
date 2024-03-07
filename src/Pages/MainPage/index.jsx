import Navbar from "../../Components/Navbar";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import TopicBox from "../../Components/ThreadBox/topic";
import SketchPng from "../../Assets/pngs/Sketch.png";
import { SwipeRightArrowSVG, SwipeLeftArrowSVG } from "../../Assets/svgs";
import SelectedTopicPage from "../../Components/Pages/SelectedTopicPage";
import CreateThread from "../../Components/PopUp/createthread";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_CLIENT_API;


function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [slidePx, setSlidePx] = useState(0);
  const [typeTopicPopUpEnabled, setTypeTopicPopUpEnabled] = useState(false);
  const [sameTopicAlreadyExist, setSameTopicAlreadyExist] = useState(false);
  const [topicsid, setTopicsid] = useState("");
  const [topics, setTopics] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("like");
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [reportPopUpEnabled, setReportPopUpEnabled] = useState(false);
  const [reportType, setReportType] = useState("topic");
  const [topicsContainerVisible, setTopicsContainerVisible] = useState(true);
  const [threadData,setThreadData] = useState(0);
  const [SlideWidth,setSlideWidth] = useState(0);
  const [isloding,setisloding]=useState(false);
  
  const [boardData,setboardData] = useState(0);

  const CreateThreadFunc = () => {
    axios.post('/api/thread', { threadName: inputValue })
      .then(response => {
        console.log('새로운 스레드가 성공적으로 생성되었습니다.', response.data);
    setTypeTopicPopUpEnabled(false);
    GetThreadData();
      })
      .catch(error => {
        console.error('새로운 스레드 생성 중 오류가 발생했습니다:', error);
      });
  };
  
const GetThreadData = () => {
  axios.get(`/api/thread`)
    .then(response => {
      setSlideWidth(740 * response.data.threads.length);
      console.log('API 응답:', response.data.threads);
      setThreadData(response.data.threads);
      if(threadData!=""){
        setisloding(true);
      }
    })
    .catch(error => {
      console.error('API 요청 실패:', error);
      setisloding(true);
    });
};

const GetBoardData=() => {
  axios.get(`/api/board`)
    .then(response => {
      console.log(response.data.boards);
      setboardData(response.data.boards);
      console.log("dafasfdsafd", boardData);
    })
    .catch(error => {
      console.error('API 요청 실패d:', error);
    });
};

useEffect(() => {
  GetThreadData();
  GetBoardData();
}, []);

  const handleSwipeRight = () => {
    const newSlidePx = slidePx - 650;
    setSlidePx(newSlidePx < -SlideWidth ? -SlideWidth : newSlidePx);
  };

  const handleSwipeLeft = () => {
    const newSlidePx = slidePx + 650;
    setSlidePx(newSlidePx > 0 ? 0 : newSlidePx);
  };

  const handleTypeTopicPopUp = () => {
    setTypeTopicPopUpEnabled(true);
    console.log(typeTopicPopUpEnabled);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const SameNameThread = Array.isArray(threadData) ? threadData.filter(thread => thread?.threadName === event.target.value) : [];
    setSameTopicAlreadyExist(SameNameThread!="");
  };
  
  const handleTopicArrowClick = (value) => {
    setTopicsid(value.threadId);
    setTopics(value.threadName);
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

  console.log("threadData",threadData);

  return (
    <>
      <Navbar threadData={threadData} boardData={boardData} topics={topics} setTopics={setTopics} topicsid={topicsid} setTopicsid={setTopicsid}/>
      {threadData.length ? (
        <>
          <s.TopicsMainContainer>
            <s.TopicsContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
                display: topicsContainerVisible ? "flex" : "none",
              }}
            >
              {Array.from({ length: threadData.length }).map((_, index) => (
                <TopicBox
                  key={index}
                  onTopicArrowClick={handleTopicArrowClick}
                  threadData={threadData[index]}
                  boardData={boardData}
                  setboardData={setboardData}
                  setSlideWidth ={setSlideWidth}
                  halloffame={false}

                  
                />
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
            {topics && (
              <SelectedTopicPage
              
              boardData={boardData}
              setboardData={setboardData}

                topicsid={topicsid}
                topics={topics}
                setTopicsid={setTopicsid}
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
                handleTypeTopicPopUp={handleTypeTopicPopUp}
                CreateThreadFunc={CreateThreadFunc}
              />
            </>
          )}
        </>
      ) : isloding? (
        <>
        <s.MainContainer>
          <s.ThreadNotFoundBox>
            <img src={SketchPng} width="660px" height="660px" alt="Sketch" />
            <s.ThreadNotFoundTextBox >
              <s.ThreadNotFoundTitle>스레드가 없어요</s.ThreadNotFoundTitle>
              <s.ThreadNotFoundDesc>
                처음으로 스레드를 만들어보세요!
              </s.ThreadNotFoundDesc>
            </s.ThreadNotFoundTextBox>
          </s.ThreadNotFoundBox>
          <s.CreateThreadText>
              찾으시는 스레드가 없나요?{" "}
              <s.CreateThreadButtonText onClick={handleTypeTopicPopUp}>
                스레드 만들기
              </s.CreateThreadButtonText>
            </s.CreateThreadText>
        </s.MainContainer>
         {typeTopicPopUpEnabled && (
          <>
            <CreateThread
              inputValue={inputValue}
              sameTopicAlreadyExist={sameTopicAlreadyExist}
              handleInputChange={handleInputChange}
              handleTypeTopicPopUp={handleTypeTopicPopUp}
              CreateThreadFunc={CreateThreadFunc}
            />
          </>
        )}</>
      ):(<></>)}
    </>
  );
}

export default MainPage;

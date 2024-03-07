import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import * as s from "./style";
import {
  BlueCircleSVG,
  GrayCircleSVG,
  SwipeRightArrowSVG,
  SwipeLeftArrowSVG,
} from "../../Assets/svgs";
import ThreadBox from "../../Components/ThreadBox/halloffame";
import axios from "axios";
import TopicBox from "../../Components/ThreadBox/topic";

function HallOfFamePage() {
  const [selected, setSelected] = useState("today");
  const [slidePx, setSlidePx] = useState(0);
  const [threadData,setThreadData]=useState(0);
  const ThreadBoxCount = 10;
  const SlideWidth = 650 * ThreadBoxCount;
  const [isloding,setisloding]=useState(false);
  const [show,setShow]=useState(false);
  const handleSwipeRight = () => {
    const newSlidePx = slidePx - 650;
    setSlidePx(newSlidePx);
  };

  const handleSwipeLeft = () => {
    const newSlidePx = slidePx + 650;
    setSlidePx(newSlidePx);
  };

    const handleTopicArrowClick=()=>{

    };
const GetThreadData = () => {
  axios.get(`/api/thread`)
    .then(response => {
      //setSlideWidth(740 * response.data.threads.length);
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
useEffect(()=>{
  GetThreadData();
},[])

  return (
    <>
      <Navbar threadData={threadData}/>
      <s.HallOfFameMainContainer>
        {show&&isloding ? (
          <>
          <s.SelectDateBox>
            <s.SelectWrapper onClick={() => setSelected("today")}>
              {selected === "today" ? <BlueCircleSVG /> : <GrayCircleSVG />}
              <s.SelectDateText className={selected === "today" ? "active" : ""}>
                오늘
              </s.SelectDateText>
            </s.SelectWrapper>
            <s.SelectWrapper onClick={() => setSelected("all")}>
              {selected === "all" ? <BlueCircleSVG /> : <GrayCircleSVG />}
              <s.SelectDateText className={selected === "all" ? "active" : ""}>
                전체
              </s.SelectDateText>
            </s.SelectWrapper>
          </s.SelectDateBox>
            {" "}
            <s.HallOfFameThreadBoxTitle>명예의 전당</s.HallOfFameThreadBoxTitle>
            <s.HallOfFameContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {Array.from({ length: threadData.length }).map((_, index) => (  
                <TopicBox
                  key={index}
                  onTopicArrowClick={handleTopicArrowClick}
                  threadData={threadData[index]}
                  halloffame={true}
                  //boardData={boardData}
                  //setboardData={setboardData}
                  //setSlideWidth ={setSlideWidth}
                  setShow={setShow}
                />
              ))}
              
              
            </s.HallOfFameContainer>
            <s.SwipeRightArrowButton
              onClick={handleSwipeRight}
              style={{
                display: slidePx <= -SlideWidth + 650 ? "none" : "flex",
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
          </>
        ) : (
          <s.HallOfFameBox>
            <s.HallOfFameImg />
            <s.HallOfFameTextBox>
              <s.HallOfFameTitle>
                명예의 전당에 오른 그림이 없어요
              </s.HallOfFameTitle>
              <s.HallOfFameDesc>
                가장 많은 좋아요를 받아 명예의 전당에 올라보세요!
              </s.HallOfFameDesc>
            </s.HallOfFameTextBox>
          </s.HallOfFameBox>
        )}
      </s.HallOfFameMainContainer>
    </>
  );
}

export default HallOfFamePage;

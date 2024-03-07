import React, { useEffect, useState } from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG } from "../../Assets/svgs";

function TopicBox({ onTopicArrowClick, threadData,halloffame,setShow
}) {
  const handleTopicArrowClick = () => {
    onTopicArrowClick(threadData);
  };

  const [remainingTime, setRemainingTime] = useState(null);
  const [ishalloffame,setIshalloffame]=useState(null);

  useEffect(() => {
    if (threadData && threadData.expirationDate) {
      const intervalId = setInterval(() => {
        const expirationDate = new Date(threadData.expirationDate);
        const currentTime = new Date();
        const difference = expirationDate.getTime() - currentTime.getTime();
        let hours = Math.floor(difference / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
      if (difference < 0) {
        setIshalloffame("음수");
        clearInterval(intervalId);
        if(halloffame==true){
          setShow(true);
        }
        return;
      }
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        setRemainingTime(formattedTime);
        setIshalloffame("양수");
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [threadData]);


  console.log(halloffame);
  console.log(halloffame);
  console.log(halloffame);
  console.log(halloffame);
  return (
    <>
      {halloffame==false&&ishalloffame=="양수" ? (
        <>
        <s.ThreadBoxContainer img={threadData.kingImageUrl}>
          <s.ThreadBoxBottomContainer>
            <s.ThreadBoxTextBox>
              <s.ThreadBoxTitle>{threadData.threadName}</s.ThreadBoxTitle>
              <s.ThreadBoxCreatedTimeLeftText>{remainingTime !== null && <p>{remainingTime}</p>}</s.ThreadBoxCreatedTimeLeftText>
            </s.ThreadBoxTextBox>
            <s.ThreadBoxArrowIcon onClick={handleTopicArrowClick}>
              <ThreadBoxArrowSVG />
            </s.ThreadBoxArrowIcon>
          </s.ThreadBoxBottomContainer>
        </s.ThreadBoxContainer>
      </>
      ) :halloffame==true&&ishalloffame=="음수"? (
        <>
          <s.ThreadBoxContainer img={threadData.kingImageUrl}>
            <s.ThreadBoxBottomContainer>
              <s.ThreadBoxTextBox>
                <s.ThreadBoxTitle>{threadData.threadName}</s.ThreadBoxTitle>
                <s.ThreadBoxCreatedTimeLeftText>{remainingTime !== null && <p>{remainingTime}</p>}</s.ThreadBoxCreatedTimeLeftText>
              </s.ThreadBoxTextBox>
              <s.ThreadBoxArrowIcon onClick={handleTopicArrowClick}>
              <ThreadBoxArrowSVG />
              </s.ThreadBoxArrowIcon>
            </s.ThreadBoxBottomContainer>
          </s.ThreadBoxContainer>
        </>
      ):(<></>)}
    </>
  );
}

export default TopicBox;

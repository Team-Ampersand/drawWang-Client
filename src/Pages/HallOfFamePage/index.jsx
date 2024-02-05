import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import * as s from "./style";
import {
  BlueCircleSVG,
  GrayCircleSVG,
  SwipeRightArrowSVG,
  SwipeLeftArrowSVG,
} from "../../Assets/svgs";
import ThreadBox from "../../Components/ThreadBox/halloffame";

function HallOfFamePage() {
  const [selected, setSelected] = useState("today");
  const [hallOfFameExist, setHallOfFameExist] = useState(false);
  const [slidePx, setSlidePx] = useState(0);

  const handleSwipeRight = () => {
    const newSlidePx = slidePx - 1200;
    setSlidePx(newSlidePx);
  };

  const handleSwipeLeft = () => {
    const newSlidePx = slidePx + 1200;
    setSlidePx(newSlidePx);
  };

  return (
    <>
      {hallOfFameExist ? (
        <>
          <Navbar />
          <s.HallOfFameMainContainer>
            <s.HallOfFameThreadBoxTitle>명예의 전당</s.HallOfFameThreadBoxTitle>
            <s.HallOfFameContainer
              style={{
                transform: `translateX(${slidePx}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <ThreadBox />
              <ThreadBox />
              <ThreadBox />
              <ThreadBox />
            </s.HallOfFameContainer>
            <s.SelectDateBox>
              <s.SelectWrapper onClick={() => setSelected("today")}>
                {selected === "today" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectDateText
                  className={selected === "today" ? "active" : ""}
                >
                  오늘
                </s.SelectDateText>
              </s.SelectWrapper>
              <s.SelectWrapper onClick={() => setSelected("all")}>
                {selected === "all" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectDateText
                  className={selected === "all" ? "active" : ""}
                >
                  전체
                </s.SelectDateText>
              </s.SelectWrapper>
            </s.SelectDateBox>
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
          </s.HallOfFameMainContainer>
        </>
      ) : (
        <>
          <Navbar />
          <s.MainContainer>
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
            <s.SelectDateBox>
              <s.SelectWrapper onClick={() => setSelected("today")}>
                {selected === "today" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectDateText
                  className={selected === "today" ? "active" : ""}
                >
                  오늘
                </s.SelectDateText>
              </s.SelectWrapper>
              <s.SelectWrapper onClick={() => setSelected("all")}>
                {selected === "all" ? <BlueCircleSVG /> : <GrayCircleSVG />}
                <s.SelectDateText
                  className={selected === "all" ? "active" : ""}
                >
                  전체
                </s.SelectDateText>
              </s.SelectWrapper>
            </s.SelectDateBox>
          </s.MainContainer>
        </>
      )}
    </>
  );
}

export default HallOfFamePage;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index";
import * as s from "./style";
import BlueCircleSVG from "../../Images/svgs/BlueCircle.jsx";
import GrayCircleSVG from "../../Images/svgs/GrayCircle.jsx";

function HallOfFamePage() {
  const [selected, setSelected] = useState("today"); // 초기값을 "today"로 설정

  return (
    <>
      <Navbar />
      <s.MainContainer>
        <s.HallOfFameBox>
          <s.HallOfFameImg />
          <s.HallOfFameTextBox>
            <s.HallOfFameTitle>명예의 전당에 오른 그림이 없어요</s.HallOfFameTitle>
            <s.HallOfFameDesc>가장 많은 좋아요를 받아 명예의 전당에 올라보세요!</s.HallOfFameDesc>
          </s.HallOfFameTextBox>
        </s.HallOfFameBox>
        <s.SelectDateBox>
          {/* 선택 항목의 클래스를 selected 값과 비교하여 설정 */}
          <s.SelectCircle>{selected === "today" ? <BlueCircleSVG /> : <GrayCircleSVG />}</s.SelectCircle>

          <s.SelectDateText className={selected === "today" ? "active" : ""} onClick={() => setSelected("today")}>
            오늘
          </s.SelectDateText>

          <s.SelectCircle>{selected === "all" ? <BlueCircleSVG /> : <GrayCircleSVG />}</s.SelectCircle>

          <s.SelectDateText className={selected === "all" ? "active" : ""} onClick={() => setSelected("all")}>
            전체
          </s.SelectDateText>
        </s.SelectDateBox>
      </s.MainContainer>
    </>
  );
}

export default HallOfFamePage;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import * as s from "./style";
import { BlueCircleSVG, GrayCircleSVG } from "../../Assets/svgs";

function HallOfFamePage() {
  const [selected, setSelected] = useState("today"); 

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
          <s.SelectWrapper>
            {selected === "today" ? <BlueCircleSVG /> : <GrayCircleSVG />}
            <s.SelectDateText className={selected === "today" ? "active" : ""} onClick={() => setSelected("today")}>
              오늘
            </s.SelectDateText>
          </s.SelectWrapper>
          <s.SelectWrapper>
            {selected === "all" ? <BlueCircleSVG /> : <GrayCircleSVG />}
            <s.SelectDateText className={selected === "all" ? "active" : ""} onClick={() => setSelected("all")}>
              전체
            </s.SelectDateText>
          </s.SelectWrapper>
        </s.SelectDateBox>
      </s.MainContainer>
    </>
  );
}

export default HallOfFamePage;

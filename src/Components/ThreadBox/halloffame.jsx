import React from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG } from "../../Assets/svgs";

function HallofFameBox() {
  return (
    <>
      <s.ThreadBoxContainer>
        <s.ThreadBoxBottomContainer>
          <s.ThreadBoxTextBox>
            <s.ThreadBoxTitle>학교</s.ThreadBoxTitle>
            <s.ThreadBoxCreatedTimeLeftText>
              한재형
            </s.ThreadBoxCreatedTimeLeftText>
          </s.ThreadBoxTextBox>
          <s.ThreadBoxArrowIcon>
            <ThreadBoxArrowSVG />
          </s.ThreadBoxArrowIcon>
        </s.ThreadBoxBottomContainer>
      </s.ThreadBoxContainer>
    </>
  );
}

export default HallofFameBox;

import React from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG } from "../../Assets/svgs";

function ThreadBox() {
  return (
    <>
      <s.ThreadBoxContainer>
        <s.ThreadBoxBottomContainer>
          <s.ThreadBoxTextBox>
            <s.ThreadBoxTitle>스레드 제목</s.ThreadBoxTitle>
            <s.ThreadBoxCreatedTimeText>00:00:00</s.ThreadBoxCreatedTimeText>
          </s.ThreadBoxTextBox>
          <s.ThreadBoxArrowIcon>
            <ThreadBoxArrowSVG />
          </s.ThreadBoxArrowIcon>
        </s.ThreadBoxBottomContainer>
      </s.ThreadBoxContainer>
    </>
  );
}

export default ThreadBox;

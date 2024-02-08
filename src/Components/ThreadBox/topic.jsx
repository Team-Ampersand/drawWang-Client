import React from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG } from "../../Assets/svgs";

function TopicBox({ onTopicArrowClick }) {
  const handleTopicArrowClick = () => {
    onTopicArrowClick();
  };

  return (
    <>
      <s.ThreadBoxContainer>
        <s.ThreadBoxBottomContainer>
          <s.ThreadBoxTextBox>
            <s.ThreadBoxTitle>스레드 제목</s.ThreadBoxTitle>
            <s.ThreadBoxCreatedTimeLeftText>
              00:00:00
            </s.ThreadBoxCreatedTimeLeftText>
          </s.ThreadBoxTextBox>
          <s.ThreadBoxArrowIcon onClick={handleTopicArrowClick}>
            <ThreadBoxArrowSVG />
          </s.ThreadBoxArrowIcon>
        </s.ThreadBoxBottomContainer>
      </s.ThreadBoxContainer>
    </>
  );
}

export default TopicBox;

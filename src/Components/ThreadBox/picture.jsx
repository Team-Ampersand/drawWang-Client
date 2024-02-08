import React from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG, HeartSVG } from "../../Assets/svgs";

function PictureBox({ onPictureArrowClick }) {
  const handlePictureArrowClick = () => {
    onPictureArrowClick();
  };

  return (
    <>
      <s.ThreadBoxContainer>
        <s.ThreadBoxBottomContainer>
          <s.ThreadBoxTextBox>
            <HeartSVG />
            <s.NumberOfHeartText>9,999</s.NumberOfHeartText>
          </s.ThreadBoxTextBox>
          <s.ThreadBoxArrowIcon onClick={handlePictureArrowClick}>
            <ThreadBoxArrowSVG />
          </s.ThreadBoxArrowIcon>
        </s.ThreadBoxBottomContainer>
      </s.ThreadBoxContainer>
    </>
  );
}

export default PictureBox;

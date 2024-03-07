import React from "react";
import * as s from "./style";

function Report({
  reportType,
  handleReportPopUp,
  handleReportTypeTopicButtonClick,
  handleReportTypePictureButtonClick,
}) {
  return (
    <>
      <s.ReportPicturePopUpBackground
        onClick={handleReportPopUp}
      ></s.ReportPicturePopUpBackground>
      <s.ReportPicturePopUp>
        <s.ReportPicturePopUpReportTypeButtonWrapper>
          <s.ReportPicturePopUpReportTypeButton
            className={reportType === "topic" ? "active" : ""}
            onClick={handleReportTypeTopicButtonClick}
          >
            주제
          </s.ReportPicturePopUpReportTypeButton>
          <s.ReportPicturePopUpReportTypeButton
            className={reportType === "picture" ? "active" : ""}
            onClick={handleReportTypePictureButtonClick}
          >
            그림
          </s.ReportPicturePopUpReportTypeButton>
        </s.ReportPicturePopUpReportTypeButtonWrapper>
        <s.ReportPicturePopUpReportInputBox
          as="textarea"
          placeholder={"내용을 입력해주세요."}
          rows={10}
        />
        <s.ReportPicturePopUpSubmitButton >
          확인
        </s.ReportPicturePopUpSubmitButton>
      </s.ReportPicturePopUp>
    </>
  );
}

export default Report;

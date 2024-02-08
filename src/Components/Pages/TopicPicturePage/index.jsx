import React from "react";
import * as s from "./style";
import { SwipeLeftArrowSVG, ReportSVG } from "../../../Assets/svgs";
import Report from "../../PopUp/report";

function TopicPicture({
  handleClosePicture,
  handleReportPopUp,
  reportPopUpEnabled,
  reportType,
  handleReportTypeTopicButtonClick,
  handleReportTypePictureButtonClick,
}) {
  return (
    <>
      <s.SelectedPictureContainer>
        <s.SlectedPictureNav>
          <s.SelectedPictureItem
            style={{ cursor: "pointer" }}
            onClick={handleClosePicture}
          >
            <SwipeLeftArrowSVG />
          </s.SelectedPictureItem>
          <s.SelectedPictureItem>학교</s.SelectedPictureItem>
          <s.SelectedPictureItem
            style={{ cursor: "pointer" }}
            onClick={handleReportPopUp}
          >
            <ReportSVG />
          </s.SelectedPictureItem>
        </s.SlectedPictureNav>
      </s.SelectedPictureContainer>
      {/* 신고 버튼이 눌리면 열릴 팝업 reportpopup */}
      {reportPopUpEnabled && (
        <Report
          reportType={reportType}
          handleReportPopUp={handleReportPopUp}
          handleReportTypeTopicButtonClick={handleReportTypeTopicButtonClick}
          handleReportTypePictureButtonClick={
            handleReportTypePictureButtonClick
          }
        />
      )}
    </>
  );
}

export default TopicPicture;

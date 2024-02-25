import React from "react";
import * as s from "./style";
import { BlueCircleSVG, GrayCircleSVG } from "../../Assets/svgs";

const FilterPopup = ({ selectedFilter, setSelectedFilter, closePopup }) => {
  return (
    <>
      <s.FilterPopUpContainer>
        <s.SelectFilterWrapper onClick={() => setSelectedFilter("like")}>
          {selectedFilter === "like" ? <BlueCircleSVG /> : <GrayCircleSVG />}
          <s.SelectFilterText
            className={selectedFilter === "like" ? "active" : ""}
            onClick={() => setSelectedFilter("like")}
          >
            오늘
          </s.SelectFilterText>
        </s.SelectFilterWrapper>
        <s.SelectFilterWrapper onClick={() => setSelectedFilter("date")}>
          {selectedFilter === "date" ? <BlueCircleSVG /> : <GrayCircleSVG />}
          <s.SelectFilterText
            className={selectedFilter === "date" ? "active" : ""}
          >
            전체
          </s.SelectFilterText>
        </s.SelectFilterWrapper>
      </s.FilterPopUpContainer>
    </>
  );
};

export default FilterPopup;

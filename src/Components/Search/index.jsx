import React from "react";
import * as s from "./Style";
import { SearchSVG, ArrowRotationSVG } from "../../Assets/svgs";

const Search = ({ search, searchContent }) => {
  return (
    <>
      {search && searchContent != "" && (
        <s.SearchBoxContainer>
          <s.SearchBox>
            <s.SearchItem>
              <s.SearchItemTitle>
                <SearchSVG />
                <div>{searchContent}</div>
              </s.SearchItemTitle>
              <ArrowRotationSVG />
            </s.SearchItem>
            <s.PopularThreadText>인기스레드</s.PopularThreadText>
            <s.SearchItem>
              <s.SearchItemTitle>
                <div>1.</div>
                <div>학교</div>
              </s.SearchItemTitle>
              <ArrowRotationSVG />
            </s.SearchItem>
            <s.SearchItem>
              <s.SearchItemTitle>
                <div>2.</div>
                <div>집</div>
              </s.SearchItemTitle>
              <ArrowRotationSVG />
            </s.SearchItem>
            <s.SearchItem>
              <s.SearchItemTitle>
                <div>3.</div>
                <div>롯데월드</div>
              </s.SearchItemTitle>
              <ArrowRotationSVG />
            </s.SearchItem>
          </s.SearchBox>
        </s.SearchBoxContainer>
      )}
    </>
  );
};

export default Search;

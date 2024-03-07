import React, { useEffect, useState } from "react";
import * as s from "./Style";
import { SearchSVG, ArrowRotationSVG } from "../../Assets/svgs";

const Search = ({ search, searchContent, threadData, boardData,topics,setTopics,setTopicsid }) => {
  const [SameNameThread, setSameNameThread] = useState(0);
  const [topTopics, setTopTopics] = useState([]);
  const [topTopicsName1, setTopTopicsName1] = useState("");
  const [topTopicsName2, setTopTopicsName2] = useState("");
  const [topTopicsName3, setTopTopicsName3] = useState("");

  console.log("boardData", threadData);
  console.log(boardData);
  console.log(boardData);
  console.log(boardData);
  
  useEffect(() => {
    if (Array.isArray(threadData)) {
      const filtered = threadData.filter((thread) => thread?.threadName === searchContent);
      setSameNameThread(filtered);
      console.log(filtered);
    }
    if (Array.isArray(boardData)) {
      const topicCount = {};

      boardData.forEach((thread) => {
        const topicName = thread?.threadId;
        if (topicName) {
          topicCount[topicName] = (topicCount[topicName] || 0) + 1;
        }
      });

      // 카운트된 주제 이름을 배열로 변환하여 정렬
      const sortedTopics = Object.keys(topicCount).sort((a, b) => topicCount[b] - topicCount[a]);

      // 상위 3개 주제 선택
      const top3Topics = sortedTopics.slice(0, 3);

      
      // 선택된 주제를 저장
      setTopTopics(top3Topics);
      console.log(topTopics);

      threadData.forEach((thread) => {
        console.log("for", thread);
        if (thread?.threadId == topTopics[0]) {
          setTopTopicsName1(thread.threadName);
          console.log("for1", thread.threadName);
        }
        if (thread?.threadId == topTopics[1]) {
          setTopTopicsName2(thread.threadName);
          console.log("for2", thread.threadName);
        }
        if (thread?.threadId == topTopics[2]) {
          setTopTopicsName3(thread.threadName);
          console.log("for3", thread.threadName);
        }
      });
    }
  }, [searchContent]);

  
  function haahha() {
    setTopics("5일 8시 1분");
    setTopicsid(topTopics[0]);
    console.log("set");

  }
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
              {SameNameThread.length > 0 ? (
                <div style={{ cursor: "pointer" }}>
                  <ArrowRotationSVG />
                </div>
              ) : null}
            </s.SearchItem>
            {topTopicsName1 && (
              <>
                <s.PopularThreadText>인기스레드</s.PopularThreadText>
              </>
            )}
            <s.SearchItem>
              {topTopicsName1 && (
                <>
                  <s.SearchItemTitle>
                    <div>1.</div>
                    <div>{topTopicsName1}</div>
                  </s.SearchItemTitle>
                  <div style={{ cursor: "pointer" }} onClick={haahha}>
                  <ArrowRotationSVG />
                  </div>
                </>
              )}
            </s.SearchItem>
            <s.SearchItem>
              {topTopicsName2 && (
                <>
                  <s.SearchItemTitle>
                    <div>2.</div>
                    <div>{topTopicsName2}</div>
                  </s.SearchItemTitle>
                  <div style={{ cursor: "pointer" }}>
                  <ArrowRotationSVG />

                  </div>
                </>
              )}
            </s.SearchItem>
            <s.SearchItem>
              {topTopicsName3 && (
                <>
                  <s.SearchItemTitle>
                    <div>3.</div>
                    <div>{topTopicsName3}</div>
                  </s.SearchItemTitle>
                  <div style={{ cursor: "pointer" }} >
                  <ArrowRotationSVG />
                  </div>
                </>
              )}
            </s.SearchItem>
          </s.SearchBox>
        </s.SearchBoxContainer>
      )}
    </>
  );
};

export default Search;

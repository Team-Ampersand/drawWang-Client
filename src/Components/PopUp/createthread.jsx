import React from "react";
import * as s from "./style";

function CreateThread({
  inputValue,
  sameTopicAlreadyExist,
  handleInputChange,
  handleTypeTopicPopUp,
  CreateThreadFunc
}) {
  return (
    <>
      <s.PopUpBackground onClick={handleTypeTopicPopUp} />
      <s.TypeTopicPopUpContainer>
        <s.TypeTopicPopUpTitle>주제를 입력해주세요</s.TypeTopicPopUpTitle>
        <s.TypeTopicPopUpInput
          value={inputValue}
          onChange={handleInputChange}
          className={sameTopicAlreadyExist ? "error" : ""}
        />
        {sameTopicAlreadyExist && (
          <s.ErrorMessage>이미 존재하는 스레드입니다.</s.ErrorMessage>
        )}
        <s.TypeTopicPopUpButton
          onClick={CreateThreadFunc}
          className={inputValue ? "active" : ""}
        >
          확인
        </s.TypeTopicPopUpButton>
      </s.TypeTopicPopUpContainer>
    </>
  );
}

export default CreateThread;

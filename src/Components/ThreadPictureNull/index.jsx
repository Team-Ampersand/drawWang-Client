import * as s from "./style";

function ThreadPictureNull() {
  return (
    <s.MainContainer>
      <s.PictureNullBox>
        <s.PictureNullImg />
        <s.PictureNullTextBox>
          <s.PictureNullTitle>아직 그림이 없어요</s.PictureNullTitle>
          <s.PictureNullDesc>이 스레드의 첫 그림을 그려보세요!</s.PictureNullDesc>
        </s.PictureNullTextBox>
        <s.DrawButton>그림그리기</s.DrawButton>
      </s.PictureNullBox>
    </s.MainContainer>
  );
}

export default ThreadPictureNull;

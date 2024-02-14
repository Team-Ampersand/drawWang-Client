import { ChevronLeftSVG } from "../../Assets/svgs";
import Navbar from "../../Components/Navbar";
import * as s from "./style";

function ThreadPictureNullPage() {
  return (
    <>
      <Navbar />
      <s.ThreadPictureNullContainer>
        <s.ThreadPictureNullTitleBox>
          <s.TopTitleContainer>
            <ChevronLeftSVG />
            <s.ThreadName>학교</s.ThreadName>
          </s.TopTitleContainer>
          <s.ThreadTimeLeftText>13:25:17</s.ThreadTimeLeftText>
        </s.ThreadPictureNullTitleBox>
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
      </s.ThreadPictureNullContainer>
    </>
  );
}

export default ThreadPictureNullPage;

import Navbar from "../../Components/Navbar";
import * as s from "./style";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <s.MainContainer>
        <s.PageNotFoundBox>
          <s.PageNotFoundImg />
          <s.PageNotFoundTextBox>
            <s.PageNotFoundTitle>페이지를 찾을 수 없어요</s.PageNotFoundTitle>
            <s.PageNotFoundDesc>잠시 후에 시도해 주세요.</s.PageNotFoundDesc>
          </s.PageNotFoundTextBox>
        </s.PageNotFoundBox>
      </s.MainContainer>
    </>
  );
}

export default NotFoundPage;

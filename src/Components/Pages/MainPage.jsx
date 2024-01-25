import Navbar from "../Components/Navbar";
import * as s from "../Styles/MainPageStyle";
import "../Styles/App.css";

function MainPage() {
  return (
    <>
      <Navbar />
      <s.MainContainer>
        <s.ThreadNotFoundBox>
          <s.ThreadNotFoundImg />
          <s.ThreadNotFoundTextBox>
            <s.ThreadNotFoundTitle>스레드가 없어요</s.ThreadNotFoundTitle>
            <s.ThreadNotFoundDesc>처음으로 스레드를 만들어보세요!</s.ThreadNotFoundDesc>
          </s.ThreadNotFoundTextBox>
        </s.ThreadNotFoundBox>
        <s.CreateThreadText>
          찾으시는 스레드가 없나요? <s.CreateThreadButtonText>스레드 만들기</s.CreateThreadButtonText>
        </s.CreateThreadText>
      </s.MainContainer>
    </>
  );
}

export default MainPage;

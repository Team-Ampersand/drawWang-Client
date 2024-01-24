import Navbar from "../Components/Navbar";
import * as s from "../Styles/MainPageStyle";

function MainPage() {
  return (
    <>
      <Navbar />
      <s.MainContainer>
        <s.ThreadNotFoundBox>
          <s.ThreadNotFoundImg />
        </s.ThreadNotFoundBox>
      </s.MainContainer>
    </>
  );
}

export default MainPage;

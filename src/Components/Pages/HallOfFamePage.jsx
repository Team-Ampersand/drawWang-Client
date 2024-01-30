import Navbar from "../Components/Navbar";
import * as s from "../Styles/HallOfFamePageStyle";

function HallOfFamePage() {
  return (
    <>
      <Navbar></Navbar>
      <s.MainContainer>
        <s.HallOfFameBox>
          <s.HallOfFameImg />
          <s.HallOfFameTextBox>
            <s.HallOfFameTitle>명예의 전당에 오른 그림이 없어요</s.HallOfFameTitle>
            <s.HallOfFameDesc>가장 많은 좋아요를 받아 명예의 전당에 올라보세요!</s.HallOfFameDesc>
          </s.HallOfFameTextBox>
        </s.HallOfFameBox>
      </s.MainContainer>
    </>
  );
}

export default HallOfFamePage;

import Navbar from "../../Components/Navbar";
import * as s from "./style";
function ServiceUnavailablePage() {
  return (
    <>
      <Navbar />
      <s.MainContainer>
        <s.ServiceUnavailableBox>
          <s.ServiceUnavailableImg />
          <s.ServiceUnavailableTextBox>
            <s.ServiceUnavailableTitle>페이지를 찾을 수 없어요</s.ServiceUnavailableTitle>
            <s.ServiceUnavailableDesc>잠시 후에 시도해 주세요.</s.ServiceUnavailableDesc>
          </s.ServiceUnavailableTextBox>
        </s.ServiceUnavailableBox>
      </s.MainContainer>
    </>
  );
}

export default ServiceUnavailablePage;

import { Link } from "react-router-dom";
import * as s from "./style";

function ThreadPictureNull(props) {
  
  console.log(props.id);
  console.log(props.topics);
  console.log(props);
  return (
    <s.MainContainer>
      <s.PictureNullBox>
        <s.PictureNullImg />
        <s.PictureNullTextBox>
          <s.PictureNullTitle>아직 그림이 없어요</s.PictureNullTitle>
          <s.PictureNullDesc>이 스레드의 첫 그림을 그려보세요!</s.PictureNullDesc>
        </s.PictureNullTextBox>
<Link to="/board" state={{ id: props.id, topics:props.topics }}>
        <s.DrawButton>그림그리기</s.DrawButton>
</Link>
      </s.PictureNullBox>
    </s.MainContainer>
  );
}

export default ThreadPictureNull;

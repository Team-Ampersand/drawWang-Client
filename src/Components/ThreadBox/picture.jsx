import React, { useEffect, useState } from "react";
import * as s from "./style";
import { ThreadBoxArrowSVG, HeartSVG, RedHeartSVG } from "../../Assets/svgs";
import axios from "axios";

function PictureBox({ onPictureArrowClick,threadData }) {
  const [like,setLike] = useState(threadData.likes);
  const [uplike,setUplike]= useState(false);
  const handlePictureArrowClick = () => {
    onPictureArrowClick();
  };
    let currentLikes = localStorage.getItem('likes');

  useEffect(()=>{
    const isLiked = currentLikes?.includes(threadData.id);
    if(isLiked){
      setUplike(true);
    }
  },[]);
  const HeartClick = () => {

    if (!currentLikes) {
        currentLikes = [];
    } else {
        currentLikes = JSON.parse(currentLikes);
    }

    const isLiked = currentLikes?.includes(threadData.id);

    if (!isLiked) {
      currentLikes.push(threadData.id);
      localStorage.setItem('likes', JSON.stringify(currentLikes));
      axios.patch(`/api/board/${threadData.id}/like`)
        .then(() => {
          setLike(like + 1);
          setUplike(true);
        })
        .catch(error => {
          console.error('하트 오류', error);
        });
  }
  

    // 로그
    console.log("클릭");
    console.log(threadData.id);
}

  return (
    <>
    <s.ThreadBoxContainer img={threadData.imageUrl}>
        <s.ThreadBoxBottomContainer>
          <s.ThreadBoxTextBox>
            <div onClick={HeartClick}>
              {
                uplike? <RedHeartSVG/>:<HeartSVG/>
              }
            </div>
            <s.NumberOfHeartText>{like}</s.NumberOfHeartText>
          </s.ThreadBoxTextBox>
          <s.ThreadBoxArrowIcon onClick={handlePictureArrowClick}>
            <ThreadBoxArrowSVG />
          </s.ThreadBoxArrowIcon>
        </s.ThreadBoxBottomContainer>
      </s.ThreadBoxContainer>
    </>
  );
}

export default PictureBox;

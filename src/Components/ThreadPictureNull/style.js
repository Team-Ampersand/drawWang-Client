import styled from "styled-components";
import PageNotFoundPng from "../../Assets/pngs/x.png";

export const MainContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const PictureNullBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 700px;
  height: 700px;
  margin-top: 66px;
  margin-bottom: 230px;
  flex-direction: column;
`;

export const PictureNullImg = styled.div`
  width: 640px;
  height: 640px;
  background-image: url(${PageNotFoundPng});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PictureNullTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 330px;
  position: absolute;
`;

export const PictureNullTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export const PictureNullDesc = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #737373;
`;

export const ThreadPictureNullTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 66px;
  position: absolute;
  z-index: 2;
  top: 5%;
`;

export const ThreadName = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.48px;
  z-index: 2;
`;

export const ThreadTimeLeftText = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
  color: #8c8c8c;
  z-index: 2;
`;

export const ThreadPictureNullContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;
`;

export const DrawButton = styled.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background: var(--S-5D9BFF, #5d9bff);
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const TopTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;
  right: 22px;
`;

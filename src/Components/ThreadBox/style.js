import styled from "styled-components";

export const ThreadBoxContainer = styled.div`
  width: 640px;
  height: 460px;
  background-color: #d9d9d9;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 300px;
  }

  @media screen and (max-width: 438px) {
    width: 80vw;
    height: 280px;
  }
`;

export const ThreadBoxBottomContainer = styled.div`
  display: flex;
  height: 100px;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  width: 100%;
  margin-top: calc(460px - 100px);
  padding: 0 20px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 70px;
    margin-top: calc(300px - 70px);
  }

  @media screen and (max-width: 438px) {
    height: 60px;
    margin-top: calc(280px - 60px);
  }
`;

export const ThreadBoxTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ThreadBoxTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.32px;

  @media screen and (max-width: 768px) {
    font-size: 100%;
  }
`;

export const ThreadBoxCreatedTimeLeftText = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.22px;
  color: #8c8c8c;

  @media screen and (max-width: 768px) {
    font-size: 100%;
  }
`;

export const ThreadBoxArrowIcon = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const NumberOfHeartText = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.26px;
`;

export const CreateNewThreadButton = styled.div`
  width: 120px;
  height: 460px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 30px;

  &:hover {
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
  }
`;

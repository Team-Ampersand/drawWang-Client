import styled from "styled-components";

export const ThreadBoxContainer = styled.div`
  width: 640px;
  height: 460px;
  background-color: #d9d9d9;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;

  &:hover {
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
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
`;

export const ThreadBoxCreatedTimeText = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.22px;
  color: #8c8c8c;
`;

export const ThreadBoxArrowIcon = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

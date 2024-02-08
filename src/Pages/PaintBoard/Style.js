import styled from "styled-components";
export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:20px;
`;

export const DrawItem = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.32px;
  padding: 0 36px;
`;

export const DrawFinish = styled.div`
  color: var(--P-6EC8FF, #6ec8ff);

  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 107.692% */
  letter-spacing: -0.26px;
`;
export const DrawNav = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DrawNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;
  align-items: center;
`;

import styled from "styled-components";

export const StyledCursor = styled.div`
  position: fixed;
  pointer-events: none;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
  z-index: 9999;
  cursor: none;
`;

export const Circle = styled.div`
  width: ${(props) => props.BrushWidth}px;
  height: ${(props) => props.BrushWidth}px;
  border: 1px solid ${(props) => props.color};
  ${(props) =>
    props.color === "#FFF" &&
    `
  border: 1px solid gray;
`}
  ${(props) => props.BrushCap === "round" && ` border-radius: 50%;`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box; /* Include border in total width and height */
  background-color: transparent; /* Make the background transparent */
  pointer-events: none; /* Allow clicks to go through the circle */
`;

export const InnerCircle = styled.div`
  ${(props) => props.BrushCap === "round" && ` border-radius: 50%;`}
  background-color: transparent; /* Make the background transparent */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
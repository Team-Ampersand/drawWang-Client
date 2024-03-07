import styled from "styled-components";

export const ToolItem = styled.div`
  position: relative;
  display: inline-flex;
  svg:nth-child(1) {
    z-index: 1;
  }
`;

export const ToolPick = styled.div`
  position: absolute;
  left: -6px;
  bottom: -10px;
`;

export const ToolBox = styled.div`
  position: absolute;
  bottom: 38px;
  right: -196px;
`;

export const Toolbar = styled.div`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 36px;
  border-radius: 40px;
  border: 2px solid var(--Gray-8c8c8c, #8c8c8c);
  background-color: #fff;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ColorBox = styled.div`
  display: flex;
  width: 218px;
  align-items: center;
  align-content: center;
  gap: 32px 64px;
  flex-wrap: wrap;

  position: absolute;
  bottom: 70px;
  right: 100px;
`;

export const Color = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  ${(props) => props.color === "#FFF" && "width:28px; height:28px; border: 1px solid var(--Gray-D9D9D9, #D9D9D9);"}
  background: ${(props) => props.color};
  border-radius: 50%;
`;
export const BrushBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  position: absolute;
  bottom: 96px;
  right: -116px;
`;

export const Brush = styled.div`
  cursor: pointer;
  width: 254px;
  fill: #000;

  background: ${(props) => props.color};
  ${(props) => props.color === "#FFF" && " border: 2px solid var(--Gray-D9D9D9, #D9D9D9);"}
  ${(props) => props.color === "eraser" && " background-color:black;"}


  ${(props) => props.width && `height: ${props.width}px;`}
  ${(props) => props.width && props.BrushCap === "round" && `border-radius: ${props.width / 2}px;`}
`;

export const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z' fill='%23F2F2F2'/%3E%3C/svg%3E");
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
export const LineCapBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  color: var(--Red-FF3131, #ff3131);
  font-size: 18px;
`;
export const Cap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  display: flex;
  align-items: center;
`;
import React from "react";
import * as S from "./Style";
import { ToolBoxSVG, PickToolbarSVG } from "../../Assets/svgs";

const EraserToolSettings = ({ BrushCap, BrushWidth, setBrushWidth, setBrushCap, AllDelete }) => {
  return (
    <>
      <S.ToolBox>
        <ToolBoxSVG />
      </S.ToolBox>
      <S.BrushBox>
        <S.Brush width={6} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(6)} />
        <S.Brush width={10} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(10)} />
        <S.Brush width={14} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(14)} />
        <div style={{ height: "20px", display: "flex" }}>
          <S.Brush color={"eraser"} BrushCap={BrushCap} style={{ alignSelf: "center", marginTop: "20px", cursor: "auto" }} width={BrushWidth} />
        </div>
        <S.SliderContainer>
          <S.SliderInput type="range" value={BrushWidth} min={2} max={40} onChange={(e) => setBrushWidth(e.target.value)} />
        </S.SliderContainer>
        <S.LineCapBox>
          <S.Cap
            onClick={() => {
              setBrushCap("round");
            }}
            style={{ backgroundColor: BrushCap === "square" ? "#fff" : "var(--Gray-D9D9D9, #d9d9d9)" }}
          >
            <S.Brush style={{ margin: "5px" }} width={10} BrushCap={"round"} color="black" />
          </S.Cap>
          <S.Cap
            onClick={() => {
              setBrushCap("square");
            }}
            style={{ backgroundColor: BrushCap === "round" ? "#fff" : "var(--Gray-D9D9D9, #d9d9d9)" }}
          >
            <S.Brush style={{ margin: "5px" }} width={10} BrushCap={"square"} color="black" />
          </S.Cap>
          <div onClick={AllDelete}>전체 삭제</div>
        </S.LineCapBox>
      </S.BrushBox>
      <S.ToolPick>
        <PickToolbarSVG />
      </S.ToolPick>
    </>
  );
};

export default EraserToolSettings;

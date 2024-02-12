import React from "react";
import * as s from "./Style";
import { ToolBoxSVG, PickToolbarSVG } from "../../Assets/svgs";

const EraserToolSettings = ({ BrushCap, BrushWidth, setBrushWidth, setBrushCap, AllDelete }) => {
  return (
    <>
      <s.ToolBox>
        <ToolBoxSVG />
      </s.ToolBox>
      <s.BrushBox>
        <s.Brush width={6} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(6)} />
        <s.Brush width={10} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(10)} />
        <s.Brush width={14} color={"eraser"} BrushCap={BrushCap} onClick={() => setBrushWidth(14)} />
        <div style={{ height: "20px", display: "flex" }}>
          <s.Brush color={"eraser"} BrushCap={BrushCap} style={{ alignSelf: "center", marginTop: "20px", cursor: "auto" }} width={BrushWidth} />
        </div>
        <s.SliderContainer>
          <s.SliderInput type="range" value={BrushWidth} min={2} max={40} onChange={(e) => setBrushWidth(e.target.value)} />
        </s.SliderContainer>
        <s.LineCapBox>
          <s.Cap
            onClick={() => {
              setBrushCap("round");
            }}
            style={{ backgroundColor: BrushCap === "square" ? "#fff" : "var(--Gray-D9D9D9, #d9d9d9)" }}
          >
            <s.Brush style={{ margin: "5px" }} width={10} BrushCap={"round"} color="black" />
          </s.Cap>
          <s.Cap
            onClick={() => {
              setBrushCap("square");
            }}
            style={{ backgroundColor: BrushCap === "round" ? "#fff" : "var(--Gray-D9D9D9, #d9d9d9)" }}
          >
            <s.Brush style={{ margin: "5px" }} width={10} BrushCap={"square"} color="black" />
          </s.Cap>
          <div onClick={AllDelete}>전체 삭제</div>
        </s.LineCapBox>
      </s.BrushBox>
      <s.ToolPick>
        <PickToolbarSVG />
      </s.ToolPick>
    </>
  );
};

export default EraserToolSettings;

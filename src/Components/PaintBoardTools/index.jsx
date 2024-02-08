import React from "react";
import * as S from "./Style";

import { BackSVG, RedoSVG, PenSVG, EraserSVG, ColorPickerSVG, PickToolbarSVG } from "../../Assets/svgs/index";

import EraserToolSettings from "./EraserToolSettings";
import PenToolSettings from "./PenToolSettings";
import ColorToolSettings from "./ColorToolSettings";
const PaintBoardTools = ({
  color,
  setColor,
  changeColor,
  BrushCap,
  setBrushCap,
  BrushWidth,
  setBrushWidth,
  AllDelect,
  originalColor,
  setOriginalColor,
  selectedTool,
  setSelectedTool,
  undoStroke,
  redoStroke,
}) => {
  return (
    <S.Toolbar>
      <S.ToolItem
        onClick={() => {
          if (selectedTool !== "pen") {
            setSelectedTool("pen");
            if (originalColor) {
              setColor(originalColor);
              setOriginalColor(null);
            }
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <PenSVG />
        {selectedTool === "pen" && (
          <PenToolSettings color={color} BrushCap={BrushCap} BrushWidth={BrushWidth} setBrushWidth={setBrushWidth} setBrushCap={setBrushCap} />
        )}
      </S.ToolItem>

      <S.ToolItem
        onClick={() => {
          if (selectedTool !== "eraser") {
            setSelectedTool("eraser");
            setOriginalColor(color);
            setColor("#FFF");
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <EraserSVG />
        {selectedTool === "eraser" && (
          <EraserToolSettings BrushCap={BrushCap} BrushWidth={BrushWidth} setBrushWidth={setBrushWidth} setBrushCap={setBrushCap} AllDelete={AllDelect} />
        )}
      </S.ToolItem>

      <S.ToolItem onClick={undoStroke} style={{ cursor: "pointer" }}>
        <BackSVG />
        <S.ToolPick>{selectedTool === "undo" && <PickToolbarSVG />}</S.ToolPick>
      </S.ToolItem>
      <S.ToolItem onClick={redoStroke} style={{ cursor: "pointer" }}>
        <RedoSVG />
        <S.ToolPick>{selectedTool === "redo" && <PickToolbarSVG />}</S.ToolPick>
      </S.ToolItem>
      <S.ToolItem onClick={() => setSelectedTool(selectedTool === "color" ? null : "color")} style={{ cursor: "pointer" }}>
        <ColorPickerSVG color={color} />
        <S.ToolBox>{selectedTool === "color" && <ColorToolSettings color={color} changeColor={changeColor} />}</S.ToolBox>
      </S.ToolItem>
    </S.Toolbar>
  );
};

export default PaintBoardTools;

import React from "react";
import * as s from "./Style";

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
    <s.Toolbar>
      <s.ToolItem
        onClick={() => {
          setSelectedTool(selectedTool === "pen" ? "" : "pen");
          if (originalColor) {
            setColor(originalColor);
            setOriginalColor(null);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <PenSVG />
        {selectedTool === "pen" && (
          <PenToolSettings color={color} BrushCap={BrushCap} BrushWidth={BrushWidth} setBrushWidth={setBrushWidth} setBrushCap={setBrushCap} />
        )}
      </s.ToolItem>

      <s.ToolItem
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
      </s.ToolItem>

      <s.ToolItem onClick={undoStroke} style={{ cursor: "pointer" }}>
        <BackSVG />
        <s.ToolPick>{selectedTool === "undo" && <PickToolbarSVG />}</s.ToolPick>
      </s.ToolItem>
      <s.ToolItem onClick={redoStroke} style={{ cursor: "pointer" }}>
        <RedoSVG />
        <s.ToolPick>{selectedTool === "redo" && <PickToolbarSVG />}</s.ToolPick>
      </s.ToolItem>
      <s.ToolItem onClick={() => setSelectedTool(selectedTool === "color" ? "" : "color")} style={{ cursor: "pointer" }}>
        <ColorPickerSVG color={color} />
        <s.ToolBox>{selectedTool === "color" && <ColorToolSettings color={color} changeColor={changeColor} />}</s.ToolBox>
      </s.ToolItem>
    </s.Toolbar>
  );
};

export default PaintBoardTools;

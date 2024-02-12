import React from "react";
import * as s from "./Style";
import { ToolBoxSVG } from "../../Assets/svgs";

const ColorToolSettings = ({ changeColor }) => {
  return (
    <>
      <ToolBoxSVG />
      <s.ColorBox>
        <s.Color color={"#F00"} onClick={() => changeColor("#F00")} />
        <s.Color color={"#FF8C00"} onClick={() => changeColor("#FF8C00")} />
        <s.Color color={"#F9F906"} onClick={() => changeColor("#F9F906")} />
        <s.Color color={"#7CCF5F"} onClick={() => changeColor("#7CCF5F")} />
        <s.Color color={"#008000"} onClick={() => changeColor("#008000")} />
        <s.Color color={"#89D6E7"} onClick={() => changeColor("#89D6E7")} />
        <s.Color color={"#00F"} onClick={() => changeColor("#00F")} />
        <s.Color color={"#800080"} onClick={() => changeColor("#800080")} />
        <s.Color color={"#4B0082"} onClick={() => changeColor("#4B0082")} />
        <s.Color color={"#FFF"} onClick={() => changeColor("#FFF")} />
        <s.Color color={"#595959"} onClick={() => changeColor("#595959")} />
        <s.Color color={"#000"} onClick={() => changeColor("#000")} />
      </s.ColorBox>
    </>
  );
};

export default ColorToolSettings;

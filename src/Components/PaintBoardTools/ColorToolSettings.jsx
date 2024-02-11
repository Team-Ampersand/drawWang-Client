import React from "react";
import * as S from "./Style";
import { ToolBoxSVG } from "../../Assets/svgs";

const ColorToolSettings = ({ changeColor }) => {
  return (
    <>
      <ToolBoxSVG />
      <S.ColorBox>
        <S.Color color={"#F00"} onClick={() => changeColor("#F00")} />
        <S.Color color={"#FF8C00"} onClick={() => changeColor("#FF8C00")} />
        <S.Color color={"#F9F906"} onClick={() => changeColor("#F9F906")} />
        <S.Color color={"#7CCF5F"} onClick={() => changeColor("#7CCF5F")} />
        <S.Color color={"#008000"} onClick={() => changeColor("#008000")} />
        <S.Color color={"#89D6E7"} onClick={() => changeColor("#89D6E7")} />
        <S.Color color={"#00F"} onClick={() => changeColor("#00F")} />
        <S.Color color={"#800080"} onClick={() => changeColor("#800080")} />
        <S.Color color={"#4B0082"} onClick={() => changeColor("#4B0082")} />
        <S.Color color={"#FFF"} onClick={() => changeColor("#FFF")} />
        <S.Color color={"#595959"} onClick={() => changeColor("#595959")} />
        <S.Color color={"#000"} onClick={() => changeColor("#000")} />
      </S.ColorBox>
    </>
  );
};

export default ColorToolSettings;

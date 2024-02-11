import React, { useState, useRef, useEffect } from "react";
import * as S from "./Style";
import PaintBoardTools from "../../Components/PaintBoardTools";
import Cursor from "../../Components/Cursor";
import { SwipeLeftArrowSVG } from "../../Assets/svgs";
import ToolHideImage from '../../Assets/pngs/ToolHide.png';

const PaintBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#111");
  const [originalColor, setOriginalColor] = useState("#111");
  const [selectedTool, setSelectedTool] = useState(null);
  const [strokes, setStrokes] = useState([]);
  const [undoneStrokes, setUndoneStrokes] = useState([]);
  const [MouseIn, setMouseIn] = useState(false);
  const [BrushWidth, setBrushWidth] = useState(20);
  const [BrushCap, setBrushCap] = useState("round");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const aspectRatio = 16 / 9;

    canvas.width = (window.innerWidth / 100) * 90;
    canvas.style.border = "3px solid var(--Gray-737373, #737373)";

    canvas.height = canvas.width / aspectRatio;
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = BrushWidth;
    context.lineCap = "round";
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = color;
  }, [color]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.lineWidth = BrushWidth;
  }, [BrushWidth]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.lineCap = BrushCap;
  }, [BrushCap]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setSelectedTool(null);
    setIsDrawing(true);
    setUndoneStrokes([]);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    setStrokes((prevStrokes) => [...prevStrokes, image]);
  };

  
  const undoStroke = () => {
    const lastStroke = strokes.pop();
    setUndoneStrokes((prevUndoneStrokes) => [...prevUndoneStrokes, lastStroke]);
    redrawStrokes(strokes);
  };
  
  const redoStroke = () => {
    const lastUndoneStroke = undoneStrokes.pop();
    if (lastUndoneStroke) {
      setStrokes((prevStrokes) => [...prevStrokes, lastUndoneStroke]);
      redrawStrokes(strokes);
    }
  };
  
  const redrawStrokes = (strokesArray) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    strokesArray.forEach((imageData) => {
      const image = new Image();
      image.src = imageData;
      image.onload = () => {
        context.drawImage(image, 0, 0);
      };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === "Z" || event.key === "z")) {
        event.preventDefault();
        event.shiftKey ? redoStroke() : undoStroke();
      } else if (event.ctrlKey && event.key === "y") {
        event.preventDefault();
        redoStroke();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [undoStroke, redoStroke]);


  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "draw.png";
    link.click();
  };

  const AllDelect = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setSelectedTool(null);
  };
  const changeColor = (newColor) => {
    setColor(newColor);
    setSelectedTool(null);
  };

  return (
    <> 
      <S.DrawNavContainer>
        <S.DrawNav>
          <S.DrawItem style={{ cursor: "pointer" }}>{<SwipeLeftArrowSVG />}</S.DrawItem>
          <S.DrawItem>학교</S.DrawItem>
          <S.DrawItem style={{ cursor: "pointer" }}>
            <S.DrawFinish>완료</S.DrawFinish>
          </S.DrawItem>
        </S.DrawNav>
      </S.DrawNavContainer>

      {MouseIn && <Cursor BrushCap={BrushCap} BrushWidth={BrushWidth} color={color} />}
      <S.CanvasContainer>
        <canvas
          onMouseEnter={() => setMouseIn(true)}
          onMouseLeave={() => setMouseIn(false)}
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        />
      </S.CanvasContainer>
      <button onClick={saveDrawing}>저장</button>
      {selectedTool===null? <S.ToolHideImage src={ToolHideImage} onClick={()=>{setSelectedTool("tool")}}/>:<PaintBoardTools
        color={color}
        setColor={setColor}
        changeColor={changeColor}
        BrushCap={BrushCap}
        setBrushCap={setBrushCap}
        BrushWidth={BrushWidth}
        setBrushWidth={setBrushWidth}
        AllDelect={AllDelect}
        originalColor={originalColor}
        setOriginalColor={setOriginalColor}
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        undoStroke={undoStroke}
        redoStroke={redoStroke}
      />}
      
    </>
  );
};

export default PaintBoard;

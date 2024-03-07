import React, { useState, useRef, useEffect } from "react";
import * as s from "./Style";
import PaintBoardTools from "../../Components/PaintBoardTools";
import Cursor from "../../Components/Cursor";
import { SwipeLeftArrowSVG } from "../../Assets/svgs";
import ToolHideImage from "../../Assets/pngs/ToolHide.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PaintBoard = () => {
  const location = useLocation();
  const topicsid = location.state?.id;
  const topics = location.state?.topics;
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
    canvas.height = canvas.width / aspectRatio;
    canvas.style.border = "3px solid var(--Gray-737373, #737373)";

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

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = dataURL;
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/png"; 
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      console.log("file",file);
      const formData = new FormData();
      formData.append("image", file); 
      formData.append("request", JSON.stringify({ userName: "taeyoon", threadId: topicsid }));
      try {
        const response = await axios.post("/api/board", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("이미지가 성공적으로 서버에 전송되었습니다.", response.data);
      } catch (error) {
        console.error("이미지 전송 중 오류가 발생했습니다:", error);
      }
    });

    // 파일 선택 input 요소를 자동으로 클릭하여 파일 선택
    fileInput.click();
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
      <s.DrawNavContainer>
        <s.DrawNav>
          <s.DrawItem style={{ cursor: "pointer" }}>
            <Link to="/">{<SwipeLeftArrowSVG />}</Link>
          </s.DrawItem>
          <s.DrawItem>{topics}</s.DrawItem>
          <s.DrawItem style={{ cursor: "pointer" }} onClick={saveDrawing}>
            <s.DrawFinish>완료</s.DrawFinish>
          </s.DrawItem>
        </s.DrawNav>
      </s.DrawNavContainer>

      {MouseIn && <Cursor BrushCap={BrushCap} BrushWidth={BrushWidth} color={color} />}
      <s.CanvasContainer>
        <canvas
          onMouseEnter={() => setMouseIn(true)}
          onMouseLeave={() => setMouseIn(false)}
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        />
      </s.CanvasContainer>
      {selectedTool === null ? (
        <s.ToolHideImage
          src={ToolHideImage}
          onClick={() => {
            setSelectedTool("tool");
          }}
        />
      ) : (
        <PaintBoardTools
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
        />
      )}
      <s.MainContainer>
        <s.MobilePaintUnavailableBox>
          <s.MobilePaintUnavailableImg />
          <s.MobilePaintUnavailableTextBox>
            <s.MobilePaintUnavailableTitle>모바일 환경에선 그림을 그릴 수 없어요.</s.MobilePaintUnavailableTitle>
            <s.MobilePaintUnavailableDesc>PC에서 다시 시도해주세요!</s.MobilePaintUnavailableDesc>
          </s.MobilePaintUnavailableTextBox>
        </s.MobilePaintUnavailableBox>
      </s.MainContainer>
    </>
  );
};

export default PaintBoard;

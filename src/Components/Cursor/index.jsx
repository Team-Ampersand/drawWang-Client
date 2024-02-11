import React, { useState, useEffect } from "react";
import * as s from "./style";

const Cursor = ({ color, BrushWidth, BrushCap }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <s.StyledCursor style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <s.Circle color={color} BrushWidth={BrushWidth} BrushCap={BrushCap}>
        <s.InnerCircle BrushCap={BrushCap} />
      </s.Circle>
    </s.StyledCursor>
  );
};

export default Cursor;

import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/no" element={<P.ThreadPictureNullPage />} />
      <Route path="/board" element={<P.PaintBoard />} />
      <Route path="/halloffame" element={<P.HallOfFamePage />} />
      <Route path="/504" element={<P.ServiceUnavailablePage />} />
      <Route path="*" element={<P.NotFoundPage />} />
    </Routes>
  </Router>
);

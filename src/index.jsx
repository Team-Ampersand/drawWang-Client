import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Pages/MainPage/index";
import NotFoundPage from "./Pages/NotFoundPage/index";
import ServiceUnavailablePage from "./Pages/ServiceUnavailablePage/index";
import HallOfFamePage from "./Pages/HallOfFamePage/index";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaintBoard from "./Pages/PaintBoard";
import ThreadPictureNullPage from "./Pages/ThreadPictureNullPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/no" element={<ThreadPictureNullPage />} />
      <Route path="/board" element={<PaintBoard />} />
      <Route path="/halloffame" element={<HallOfFamePage />} />
      <Route path="/504" element={<ServiceUnavailablePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/board" element={<P.PaintBoard />} />
      <Route path="/halloffame" element={<P.HallOfFamePage />} />
      <Route path="/504" element={<P.ServiceUnavailablePage />} />
      <Route path="*" element={<P.NotFoundPage />} />
    </Routes>
  </Router>
);

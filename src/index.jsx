import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./Pages/MainPage/index";
import NotFoundPage from "./Pages/NotFoundPage/index";
import ServiceUnavailablePage from "./Pages/ServiceUnavailablePage/index";
import HallOfFamePage from "./Pages/HallOfFamePage/index";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/halloffame" element={<HallOfFamePage />} />
      <Route path="/504" element={<ServiceUnavailablePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

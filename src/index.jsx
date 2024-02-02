import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Pages/MainPage/index";
import NotFoundPage from "./Pages/NotFoundPage/index";
import ServiceUnavailablePage from "./Pages/ServiceUnavailablePage/index";
import HallOfFamePage from "./Pages/HallOfFamePage/index";
import GlobalStyle from "./Styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage />
  </React.StrictMode>
);

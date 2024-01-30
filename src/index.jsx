import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Components/Pages/MainPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import ServiceUnavailablePage from "./Components/Pages/ServiceUnavailablePage";
import HallOfFamePage from "./Components/Pages/HallOfFamePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HallOfFamePage />
  </React.StrictMode>
);

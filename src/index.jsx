import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Components/Pages/MainPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotFoundPage />
  </React.StrictMode>
);

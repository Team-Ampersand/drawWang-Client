import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Components/Pages/MainPage";
import GlobalStyle from "./Components/Styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage />
  </React.StrictMode>
);

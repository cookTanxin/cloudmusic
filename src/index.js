import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 重置样式
import "./assets/style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

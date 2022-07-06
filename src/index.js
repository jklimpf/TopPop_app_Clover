import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DeezerProvider from "./store/DeezerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DeezerProvider>
    <App />
  </DeezerProvider>
);

import { StrictMode } from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter for GitHub Pages
import App from "./App";

import "animate.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
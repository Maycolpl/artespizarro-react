import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

import { LazyMotion, domAnimation } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>
);

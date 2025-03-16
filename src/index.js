import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import StoredContextProvider from "./context/StoreContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <StoredContextProvider>
        <App />
      </StoredContextProvider>
    </BrowserRouter>
  </StrictMode>
);

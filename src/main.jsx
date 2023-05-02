import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import Basic from "./Basic";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Basic />
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

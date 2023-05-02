import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import "./index.css";
import "./global.scss";
import HomeRoutes from "./Pages/HomeRoutes";


// const DachBoardRoutes = lazy(()=> import('./DachBoard/DachBoardRoutes'))
// const AdminLogin = lazy(()=> import('./Pages/Auth/AdminLogin'))

const Basic = () => {
  return (
    <>
        <Suspense fallback={<h1>Loading ......</h1>}>
          <Routes>
            <Route path="/" element={<HomeRoutes />} />
          </Routes>
        </Suspense>
    </>
  );
};

export default Basic;

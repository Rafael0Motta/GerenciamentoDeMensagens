import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import ManagerSessions from "./Pages/ManagerSessions/index";

/* GLOBAL STYLE */
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Manager" element={<ManagerSessions />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

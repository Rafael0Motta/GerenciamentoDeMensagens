import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import ManagerSessions from "./Pages/ManagerSessions/index";
import ManagerUsers from "./Pages/ManagerUsers/index";
import Boletos from "./Pages/Boletos/index";

/* GLOBAL STYLE */
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ManagerSessions" element={<ManagerSessions />} />
        <Route path="/ManagerUsers" element={<ManagerUsers />} />
        <Route path="/Boletos" element={<Boletos />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

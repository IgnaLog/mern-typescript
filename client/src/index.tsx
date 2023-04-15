import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoList from "./views/pages/VideoList";
import VideoForm from "./views/pages/VideoForm";
import Navbar from "./views/components/Navbar";
import { ToastContainer } from "react-toastify";

import "bootswatch/dist/pulse/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={VideoList} />
          <Route path="/new-video" Component={VideoForm} />
          <Route path="/update/:id" Component={VideoForm} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

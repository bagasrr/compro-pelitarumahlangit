import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import AboutPages from "./Pages/AboutPages.jsx";
import ContactPages from "./Pages/ContactPages.jsx";
import Project from "./Pages/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPages />,
  },
  {
    path: "/contact",
    element: <ContactPages />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

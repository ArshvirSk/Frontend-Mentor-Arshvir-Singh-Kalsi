import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./layout";
import BentoGridUI from "./pages/BentoGridUI";
import SocialLinksUI from "./pages/SocialLinksUI";
import UILayout from "./UILayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <App /> }],
  },
  {
    path: "/UI",
    element: <UILayout />,
    children: [
      {
        path: "Bento-Grid-UI",
        element: <BentoGridUI />,
      },
      {
        path: "Social-Links-UI",
        element: <SocialLinksUI />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
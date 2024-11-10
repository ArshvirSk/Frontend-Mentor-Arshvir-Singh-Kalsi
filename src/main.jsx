import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./layout";
import BentoGridUI from "./pages/BentoGridUI/BentoGridUI";
import MortrageCalculator from "./pages/MortrageRepaymentCalculator/MortrageCalculator";
import SocialLinksUI from "./pages/SocialLinksUI/SocialLinksUI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <App /> }],
  },
  {
    path: "/Bento-Grid-UI",
    element: <BentoGridUI />,
  },
  {
    path: "/Social-Links-UI",
    element: <SocialLinksUI />,
  },
  {
    path: "/Mortrage-Repayment-Calculator",
    element: <MortrageCalculator />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

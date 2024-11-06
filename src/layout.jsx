import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import "./index.css";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;

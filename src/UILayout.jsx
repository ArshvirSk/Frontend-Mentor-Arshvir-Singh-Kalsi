import { Outlet } from "react-router-dom";
import UINavbar from "./components/UINavbar";

const UILayout = () => {
  return (
    <div>
      <UINavbar />
      <Outlet />
    </div>
  );
};

export default UILayout;

import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import ProfileBar from "./components/ProfileBar";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
      <ProfileBar />
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/dashbord/Sidebar";

const DashbordLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 ">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;

import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Exchange() {
  return (
    <div className="  d-flex">
      <div className="bg-danger d-flex flex-column col-1 justify-content-center">
        <SideBar></SideBar>
      </div>
      <div className=" py-3 px-2 px-md-4 d-flex justify-content-center col-11  align-items-start">
        <Outlet />
      </div>
    </div>
  );
}

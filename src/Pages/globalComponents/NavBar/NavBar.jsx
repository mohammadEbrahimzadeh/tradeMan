import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logoNavBar from "../../../img/logo.png";
import { RiEarthFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [hambergerMenu, sethambergerMenu] = useState(false);
  function hambergerMenuClick() {
    sethambergerMenu(!hambergerMenu);
  }
  function closeNavBar() {
    sethambergerMenu(false);
  }
  return (
    <div className="NavBar    flex-column-reverse flex-md-row d-flex px-md-5 py-md-3   col-12 align-items-center  justify-content-between">
      <button
        onClick={closeNavBar}
        style={{ cursor: " default", zIndex: 1023 }}
        className={` opacity-0  position-fixed   top-0   w-100 h-100 ${
          hambergerMenu ? "d-block" : "d-none"
        }`}
      ></button>
      <div className="rightnavBar   gap-md-5  justify-content-md-start  px-5 px-md-0 justify-content-between   col-12  align-items-center  d-flex col-md-7">
        <div className="col-5  ">
          <img className=" w-100" src={logoNavBar} alt="logoNavBar" />
        </div>
        <div className="col-6 BigMenu  d-none d-md-flex">
          <ul className="  list-group gap-4   fw-bold   d-flex  list-unstyled  flex-row justify-content-center  align-items-center">
            <li>
              {" "}
              <NavLink
                to={"home"}
                className={(link) => (link.isActive ? "text-warning" : "")}
              >
                صفحه اصلی
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink
                to={"/exchange"}
                className={(link) => (link.isActive ? "text-warning" : "")}
              >
                {" "}
                پنل کاربر{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to={"blog"}
                className={(link) => (link.isActive ? "text-warning" : "")}
              >
                {" "}
                بلاگ{" "}
              </NavLink>{" "}
            </li>
          </ul>
        </div>
        <div
          style={{ zIndex: 1025 }}
          className="hambergerMenu    text-white d-md-none  "
        >
          <button onClick={hambergerMenuClick}>
            <AiOutlineMenu />
          </button>{" "}
          <div
            className={`divContentMenuHamberger  ${
              hambergerMenu ? "d-flex" : "d-none"
            } d-flex justify-content-center align-items-center  `}
          >
            {" "}
            <ul className=" col-12  m-0 p-2  gap-2   fw-bold   d-flex flex-column list-unstyled   justify-content-center  align-items-center">
              <li className="">
                {" "}
                <NavLink
                  to={"/home"}
                  className={(link) => (link.isActive ? "text-warning" : "")}
                >
                  {" "}
                  صفحه اصلی{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to={"/exchange"}
                  className={(link) => (link.isActive ? "text-warning" : "")}
                >
                  {" "}
                  پنل کاربر{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to={"blog"}
                  className={(link) => (link.isActive ? "text-warning" : "")}
                >
                  {" "}
                  بلاگ{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------------- */}
      <div className="leftnavBar pt-4 p-sm-4   col-md-5 col-12  d-flex align-items-center justify-content-evenly   ">
        <ul className="list-unstyled  fw-bold mb-md-4 d-flex  gap-3   justify-content-evenly align-items-center w-100">
          <li>
            <NavLink
              to={"/login"}
              className={(link) => (link.isActive ? "text-warning" : "")}
            >
              {" "}
              ورود{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"singin"}
              className={(link) => (link.isActive ? "text-warning" : "")}
            >
              {" "}
              ثبت نام{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

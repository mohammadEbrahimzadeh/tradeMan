import React from "react";
import logo from "../../img/logo.png";
export default function NotFound() {
  return (
    <div
      style={{ height: "" }}
      className=" NotFound.jsx my-4 text-white  d-flex flex-column justify-content-center align-items-center"
    >
      <div className="  mb-sm-4 d-flex flex-column justify-content-center align-items-center   ">
        <div className=" col-4 d-flex flex-column justify-content-center align-items-center ">
          {" "}
          <img className="w-100" src={logo} alt="logo" />
        </div>
        <div className="mt-sm-4 mt-2 divForm col-10 col-sm-6">
          <h1 className="text-danger text-center">404</h1>
          <h1 className="text-danger text-center">یافت نشد !</h1>
          <p className="text-white text-center">
            صفحه مورد نظر یافت نشد! ممکن است حذف شده باشد یا لینک آن تغییر کرده
            باشد؛ لینک دیگری را در سامانه جستجو کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../../img/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
export default function LOGIN() {
  return (
    <div
      style={{ height: "" }}
      className=" LOGIN my-4 text-white  d-flex flex-column justify-content-center align-items-center"
    >
      <div className="  mb-sm-4 d-flex flex-column justify-content-center align-items-center   ">
        <div className=" col-4 d-flex flex-column justify-content-center align-items-center ">
          {" "}
          <img className="w-100" src={logo} alt="logo" />
          <h1>ورود به حساب کاربری</h1>
        </div>
        <div className="mt-sm-4 mt-2 divForm col-10 col-sm-6">
          <form
            className="d-flex  flex-column justify-content-center align-items-center p-sm-5 p-3 gap-4 gap-sm-5"
            action="#"
          >
            <div className="d-flex col-12 justify-content-center align-items-center">
              {" "}
              <span className="p-0 m-0 p-2 iconInput bg-black h-100">
                <AiOutlineUser></AiOutlineUser>
              </span>
              <input
                className="inputText p-2"
                type="text"
                placeholder="نام کاربری"
              />
            </div>
            <div className="d-flex col-12 justify-content-center align-items-center">
              {" "}
              <span className="p-0 m-0 p-2 iconInput bg-black h-100">
                <RiLockPasswordLine></RiLockPasswordLine>
              </span>
              <input
                className="inputText p-2"
                type="text"
                placeholder="کلمه عبور"
              />
            </div>

            <input
              className="submitLogin p-1 "
              type="submit"
              value={"ورود"}
              onClick={(event) => event.preventDefault()}
            />
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

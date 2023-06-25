import React from "react";
import { Link } from "react-router-dom";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FiSettings } from "react-icons/fi";

import Tooltip from "react-bootstrap/Tooltip";
export default function SideBar() {
  return (
    <div className="SideBar col-12   w-100 h-100  ">
      <div className=" mainDivSideBar ">
        <ul className="list-unstyled gap-3 gap-md-5 py-md-5 py-4   h-100 d-flex flex-column align-items-center justify-content-start">
          {" "}
          <li className=" col-8 d-flex justify-content-center align-items-center   ">
            <div className="d-none d-sm-block">
              <Link to={"CurrencyExchange"}>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tooltip`}> نمایه ارز </Tooltip>}
                >
                  <button className=" d-flex align-items-center justify-content-center text-center   p-md-3 p-1 ">
                    <BsCurrencyExchange></BsCurrencyExchange>
                  </button>
                </OverlayTrigger>
              </Link>{" "}
            </div>

            <div className="d-block divItemLi d-sm-none text-white d-flex justify-content-center align-items-center">
              <Link to={"CurrencyExchange"}>
                <BsCurrencyExchange></BsCurrencyExchange>
              </Link>
            </div>
          </li>{" "}
          <li className=" col-8 d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block">
              <Link to={"/login"}>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tooltip`}>کیف پول </Tooltip>}
                >
                  <button className="text-center d-flex align-items-center justify-content-center p-md-3 p-1">
                    <BsWallet2></BsWallet2>
                  </button>
                </OverlayTrigger>
              </Link>{" "}
            </div>

            <div className="d-block divItemLi d-sm-none text-white d-flex justify-content-center align-items-center">
              <Link to={"/login"}>
                <BsWallet2></BsWallet2>
              </Link>
            </div>
          </li>
          <li className=" col-8 d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block">
              <Link to={"/login"}>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tooltip`}>سفارشات </Tooltip>}
                >
                  <button className="text-center d-flex align-items-center justify-content-center text-center p-md-3 p-1">
                    <RiShoppingBasketLine></RiShoppingBasketLine>
                  </button>
                </OverlayTrigger>
              </Link>{" "}
            </div>

            <div className="d-block divItemLi d-sm-none text-white d-flex justify-content-center align-items-center">
              <Link to={"/login"}>
                <RiShoppingBasketLine></RiShoppingBasketLine>
              </Link>
            </div>
          </li>
          <li className=" col-8 d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block">
              <Link to={"/login"}>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tooltip`}>پشتیبانی </Tooltip>}
                >
                  <button className="text-center d-flex align-items-center justify-content-center p-md-3 p-1">
                    <BiSupport></BiSupport>
                  </button>
                </OverlayTrigger>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="d-block divItemLi d-sm-none text-white d-flex justify-content-center align-items-center">
              <Link to={"/login"}>
                <BiSupport></BiSupport>
              </Link>
            </div>
          </li>
          <li className=" col-8 d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block">
              <Link to={"/login"}>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tooltip`}>تنظیمات </Tooltip>}
                >
                  <button className=" d-flex align-items-center justify-content-center  p-md-3 p-1">
                    <FiSettings></FiSettings>
                  </button>
                </OverlayTrigger>{" "}
              </Link>
            </div>
            <div className="d-block divItemLi d-sm-none text-white d-flex justify-content-center align-items-center">
              <Link to={"/login"}>
                <FiSettings></FiSettings>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

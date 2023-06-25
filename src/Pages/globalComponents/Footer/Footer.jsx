import React from "react";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import logoFooter from "../../../img/logo.png";
export default function Footer() {
  return (
    <div className="Footer bg-dark  p-3">
      <div className="mainFooter gap-3 pb-sm-4 p-2 border-bottom flex-wrap d-flex justify-content-evenly align-items-start ">
        <div className=" col-12 col-sm-2  d-flex flex-column align-items-center justify-content-center">
          <img className="w-100 " src={logoFooter} alt="logoFooter" />

          <ul className="list-unstyled gap-sm-3 gap-1  mt-sm-2 pe-sm-3 col-12 pe-2   d-flex flex-column justify-content-center align-items-start">
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <span className=" text-white mb-1 p-1 ms-2">
                <MdAlternateEmail />
              </span>{" "}
              <a href="#" className="text-break">
                codemenco@gmail.com
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <span className=" text-white mb-1 p-1 ms-2">
                <BiMap />
              </span>{" "}
              <a href="#" className="text-break">
                تهران، نظام آباد{" "}
              </a>
            </li>{" "}
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <span className=" text-white mb-1 p-1 ms-2">
                <AiOutlinePhone />
              </span>{" "}
              <a href="#" className="text-break">
                09120000000{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="  col-12 col-sm-2 d-flex flex-column align-items-center justify-content-center">
          <ul className="list-unstyled text-white gap-sm-3 gap-3  mt-sm-2 pe-sm-3 col-12 pe-2   d-flex flex-column justify-content-center align-items-start">
            <li className="  d-flex align-items-center justify-content-center   ">
              <h1 className="m-0 p-0">درباره تریدمن</h1>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              <Link to={"aboutUs"}>درباره ما</Link>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              <Link to={"termsandrules"}>شرایط و قوانین</Link>
            </li>{" "}
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <Link to={"privacy"}> حریم خصوصی</Link>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                سیستم کد معرف
              </a>
            </li>
          </ul>
        </div>
        <div className="   col-12 col-sm-2  d-flex flex-column align-items-center justify-content-center">
          <ul className="list-unstyled text-white gap-sm-3 gap-3  mt-sm-2 pe-sm-3 col-12 pe-2   d-flex flex-column justify-content-center align-items-start">
            <li className="  d-flex align-items-center justify-content-center   ">
              <h1 className="m-0 p-0">خدمات</h1>
            </li>
            <li className="d-flex align-items-center justify-content-center   ">
              <a href="#" className="text-break">
                تبدیل ارز
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              <a href="#" className="text-break">
                Public API
              </a>
            </li>{" "}
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                Private API
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                بلاگ
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                هزینه ها
              </a>
            </li>
          </ul>
        </div>
        <div className=" col-12 col-sm-2   d-flex flex-column align-items-center justify-content-center">
          <ul className="list-unstyled text-white gap-sm-3 gap-3  mt-sm-2 pe-sm-3 col-12 pe-2   d-flex flex-column justify-content-center align-items-start">
            <li className="  d-flex align-items-center justify-content-center   ">
              <h1 className="m-0 p-0">شبکه های اجتماعی</h1>
            </li>
            <li className="d-flex align-items-center justify-content-center   ">
              <a href="#" className="text-break">
                فیسبوک
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              <a href="#" className="text-break">
                توییتر
              </a>
            </li>{" "}
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                بلاکچین
              </a>
            </li>
            <li className="  d-flex align-items-center justify-content-center   ">
              {" "}
              <a href="#" className="text-break">
                یوتیوب
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Privacy flex-wrap px-4 py-4 gap-2 d-flex  justify-content-between align-items-center">
        <div className="right  col-12 col-sm-7  text-white text-sm-end text-center">
          <h1>
            {" "}
            © 2019-2022 -{" "}
            <a className="p-0 m-0" href="#">
              Trademen
            </a>{" "}
            - کلیه حقوق محفوظ می باشد.
          </h1>
        </div>
        <div className="left col-12 col-sm-2  ms-sm-5 gap-3 text-white d-flex justify-content-center align-items-center">
          <a href="#">
            {" "}
            <FaFacebookF />
          </a>
          <a href="#">
            {" "}
            <BsTwitter />
          </a>
          <a href="#">
            {" "}
            <FaLinkedinIn />
          </a>

          <a href="#">
            {" "}
            <TiSocialYoutubeCircular />
          </a>
        </div>
      </div>
      <div className="Owner col-12  text-center text-white">
        <h1> طراحی توسط K2</h1>
      </div>
    </div>
  );
}

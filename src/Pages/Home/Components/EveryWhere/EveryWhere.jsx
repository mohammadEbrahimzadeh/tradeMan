import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";

export default function EveryWhere() {
  return (
    <div className="EveryWhere pt-md-0 pt-3">
      {" "}
      <div className="divTitle d-flex pt-md-5   flex-column justify-content-center align-items-center">
        <h1 className="text-white  text-center  border-warning">
          <span className="text-warning">ترید در</span> همه جا
        </h1>
        <p className="text-white text-center col-9 col-md-6 mt-0 mt-md-2">
          همه خدمات ما به راحتی قابل دسترسی و مدیریت هستند و حتی از وب سرویس های
          خصوصی و عمومی پشتیبانی می کند.
        </p>
      </div>
      <div className="cardsEveryWhere d-flex p-sm-0 py-1 px-2  flex-column flex-sm-row flex-wrap mt-sm-3  gap-1 d-flex justify-content-evenly align-items-center">
        <div className=" d-flex   justify-content-center align-items-start align-items-sm-center flex-column col-12 col-sm-3">
          <span className="text-warning iconEveryWhere">
            <AiOutlineMobile />
          </span>
          <h1 className="text-white  w-100 text-sm-center my-1 mb-2">موبایل</h1>
          <p className="text-white text-sm-center">
            اپلیکیشن موبایل تریدمن با فلاتر و به زبان دارت برنامه نویسی شده و
            قابلیت ریلیز همزمان برای اندروید و IOS را دارد ضمن اینکه بسیار
            پایدار و هماهنگ هستند.
          </p>
        </div>{" "}
        <div className=" d-flex justify-content-center align-items-start align-items-sm-center flex-column col-12 col-sm-3">
          <span className="text-warning iconEveryWhere">
            <AiOutlineDesktop />
          </span>
          <h1 className="text-white my-1 mb-2  w-100 text-sm-center">دکستاپ</h1>
          <p className="text-white text-sm-center">
            پلتفرم قدرتمند ترید با قابلیت اتصال به فول نود ها و سازگار با محیط
            ویندوز و مک در ابعاد مختلف به صورت کاملا ریسپانسیو و بهینه.
          </p>
        </div>{" "}
        <div className=" d-flex justify-content-center align-items-start align-items-sm-center flex-column col-12 col-sm-3">
          <span className="text-warning iconEveryWhere">
            <SiWebmoney />
          </span>
          <h1 className="text-white my-1 mb-2  w-100 text-sm-center">
            وب سرویس
          </h1>
          <p className="text-white text-sm-center">
            وب سرویس خصوصی و عمومی تریدمن قابلیت اتصال دیگر صرافی ها و وب سرویس
            گیرنده ها را فراهم می کند و صرافی شما را به عنوان مرجع قرار می دهد.
          </p>
        </div>
      </div>
    </div>
  );
}

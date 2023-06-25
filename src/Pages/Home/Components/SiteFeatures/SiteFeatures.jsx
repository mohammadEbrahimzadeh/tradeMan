import React from "react";
import portfoilo from "../../../../img/portfoilo.jpg";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
export default function SiteFeatures() {
  return (
    <div className="SiteFeatures ">
      <div className="divTitle d-flex pt-md-5   flex-column justify-content-center align-items-center">
        <h1 className="text-white  text-center  border-warning">
          <span className="text-warning">برخی</span> از ویژگی ها
        </h1>
        <p className="text-white text-center col-9 col-md-6 mt-0 mt-md-2">
          در این سامانه شما می توانید کیف پول منحصر به فرد خود را داشته باشید و
          ترید کنید یا با استفاده از قابلیت استیک پول خود را نگهداری کنید و سود
          ببرید.
        </p>
      </div>
      <div className="divFeatures  m-3 m-md-5 gap-2 gap-sm-0  flex-sm-row flex-column  d-flex justify-content-center align-items-center">
        <div className="right   ps-sm-2 p-0  col-12 col-sm-8 justify-content-center d-flex align-items-center text-white">
          <ul className="list-unstyled  gap-3   flex-wrap d-flex flex-column  flex-sm-row col-12 justify-content-crnter align-items-start align-items-sm-center   p-0">
            <li className="d-flex gap-1 gap-md-3  col-sm-5  justify-content-center align-items-center">
              <div className="iconFeatures text-warning">
                <MdOutlineManageAccounts />
              </div>
              <div>
                <h1>مدیریت پروفایل</h1>
                <p className="p-0 m-0">
                  بررسی خرید و فروش رمز ارزها و مدیریت آنها در یک صفحه
                </p>
              </div>
            </li>
            <li className="d-flex gap-1 gap-md-3  col-sm-5 justify-content-center align-items-center">
              <div className="iconFeatures text-warning">
                <MdBorderColor />
              </div>
              <div>
                <h1>سفارش گذاری</h1>
                <p className="p-0 m-0">
                  تنظیم سفارش گذاری برای خرید و فروش روی قیمت خاص و جلوگیری از
                  ضرر{" "}
                </p>
              </div>
            </li>
            <li className="d-flex gap-1 gap-md-3  col-sm-5 justify-content-center align-items-center">
              <div className="iconFeatures text-warning">
                <MdOutlineSecurity />
              </div>
              <div>
                <h1>امنیت بالا</h1>
                <p className="p-0 m-0">
                  برای افزایش امنیت صرافی سفارش ها نیاز با تایید ایمیل کاربر و
                  حتی مدیر داند (اختیاری)
                </p>
              </div>
            </li>{" "}
            <li className="d-flex gap-1 gap-md-3  col-sm-5 justify-content-center align-items-center">
              <div className="iconFeatures text-warning">
                <MdAppSettingsAlt />
              </div>
              <div>
                <h1>اپلیکیشن موبایل</h1>
                <p className="p-0 m-0">
                  دارای اپلیکیشن موبایل فلاتر با قابلیت خروجی اندروید و آی او اس
                  (IOS)
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="left mt-3 mt-sm-0 col-12 col-sm-4">
          <img src={portfoilo} className="w-100" alt="portfoilo" />
        </div>
      </div>
    </div>
  );
}

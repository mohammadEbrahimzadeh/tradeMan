import React from "react";
import { Screener } from "react-ts-tradingview-widgets";

export default function CurrencyTable({ dPlay }) {
  return (
    <div className="CurrencyTable  d-flex flex-column    align-items-center   ">
      <div
        className={` ${dPlay}   justify-content-center mb-md-5 pb-md-5  mb-4 flex-column align-items-center col-10 col-md-8   titleComponentTabale`}
      >
        <h1 className="text-white">بازار های محبوب</h1>
        <p className="text-white mb-0">
          متن آزمایشی برای پر کردن جاهای خالی به عنوان دموی متون سایت. این متن
          ها آزمایشی هستند و به صورت داینامیک توسط مدیر سامانه قابل تغییر و
          جایگزینی هستند.
        </p>
      </div>{" "}
      <div className="TableDIv      col-12   mt-md-0    ">
        <Screener
          colorTheme="dark"
          largeChartUrl="false"
          locale="en"
          width={"100%"}
        ></Screener>
      </div>
    </div>
  );
}
// my-4 mx-md-4 mx-3 pt-3  my-md-3 pt-md-5

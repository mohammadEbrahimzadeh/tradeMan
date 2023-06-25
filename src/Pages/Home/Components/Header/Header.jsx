import React, { useEffect, useState } from "react";

export default function Header() {
  const textHeaderArray = ["اعتبار", "امنیت", " سرعت", " رمز ارزها"];
  const [TextHeader, setTextHeader] = useState("");
  function changeTextFunc() {
    textHeaderArray.forEach((item, i) => {
      setTimeout(function changeText() {
        setTextHeader(item);
      }, i * 5900);
    });
  }
  useEffect(() => {
    setInterval(
      () => {
        changeTextFunc();
      },
      24000,
      changeTextFunc()
    );
  }, []);

  return (
    <div className="Header d-flex align-items-center  justify-content-center flex-column  p-4 h-100  px-sm-3 my-sm-5 text-center">
      <div className="d-flex   mb-sm-3  align-items-center   justify-content-center     text-start  ">
        <h1 className="text-white  ">بیشترین</h1>
        <h1 id="h1Pro" className="text-warning me-1 text-end ">
          {TextHeader}
        </h1>
        <span className=" " id="spanPro"></span>
      </div>

      <h1 className="text-white mb-md-5 mb-2 p-1 p-md-2">صرافی رمز ارز</h1>
      <p className="text-white">
        در معتبرترین و امن ترین پلتفرم خرید و فروش رمز ارز، ترید، استیک، هولد و
        کسب درآمد معرفی شروع به سرمایه گذاری کنید و در دنیای رمز ارز ها پیشتاز
        باشید و از منبع درآمد های بی شمارش بهرمند گردید.
      </p>
      <button className="btn text-white border-light mt-sm-5 mt-2  p-sm-2 px-sm-3">
        ثبت نام{" "}
      </button>
    </div>
  );
}

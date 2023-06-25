import React from "react";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdPrivacyTip } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
export default function AboutPlatform() {
  return (
    <div className="AboutPlatform pt-md-0 pt-3">
      {" "}
      <div className="divTitle d-flex pt-md-5   flex-column justify-content-center align-items-center">
        <h1 className="text-white  text-center col-8  border-warning">
          <span className="text-warning">تریدمن </span> قابل اعتماد ترین و
          استاندارد ترین پلتفرم ترید
        </h1>
        <p className="text-white text-center col-9 col-md-6 mt-0 mt-md-2">
          چرا باید تریدمن را انتخاب کنید و از امنیت آن مطمئن باشید.
        </p>
      </div>
      <div className="cardsEveryWhere d-flex p-sm-0 py-1 px-2  flex-column flex-sm-row flex-wrap mt-sm-3  gap-1 d-flex justify-content-evenly align-items-center">
        <div className=" d-flex justify-content-center  align-items-center flex-column col-12 col-sm-3">
          <span className="text-warning iconEveryWhere">
            <TiCloudStorageOutline />
          </span>
          <h1 className="text-white my-1 mb-2   w-100 text-center">
            ذخیره امن داده ها
          </h1>
          <p className="text-white text-center">
            الگوریتم های کاملا استاندارد و حرفه ای برای ذخیره و ویرایش داده ها و
            مدیریت آنها در پلتفرم.
          </p>
        </div>{" "}
        <div className=" d-flex   justify-content-center  align-items-center flex-column col-12 col-sm-3">
          <span className="text-warning  iconEveryWhere">
            <MdPrivacyTip />
          </span>
          <h1 className="text-white my-1 mb-2  w-100 text-center">
            حفاظت از حریم خصوصی
          </h1>
          <p className="text-white  text-center">
            ابزار های تأیید هویت چند مرحله ای مثل ورود دو مرحله ای گوگل یا تایید
            دو مرحله ای پیامکی برای امنیت بیشتر.
          </p>
        </div>{" "}
        <div className=" d-flex justify-content-center  align-items-center flex-column col-12 col-sm-3">
          <span className="text-warning iconEveryWhere">
            <HiOutlineCurrencyDollar />
          </span>
          <h1 className="text-white my-1 mb-2  w-100 text-center">
            {" "}
            ارز نامحدود
          </h1>
          <p className="text-white text-center">
            در تریدمن شما می توانید نا محدود ارز و رمز ارز را به صرافی افزوده و
            با ایجاد زوج کوین امکان تبدیل آنها را مهیا کنید.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

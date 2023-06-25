import React from "react";
import logo from "../../img/logo.png";
export default function AboutUs() {
  return (
    <div
      style={{ height: "" }}
      className=" AboutUs my-4 text-white  d-flex flex-column justify-content-center align-items-center"
    >
      <div className="  mb-sm-4 d-flex flex-column justify-content-center align-items-center   ">
        <div className=" col-11 d-flex flex-column justify-content-center align-items-start ">
          {" "}
          <h1 className="  ">AboutUs</h1>
          <p className="">
            Founded in June of 2020, Trademen is a digital currency wallet and
            trading platform where users can trade and exchange crypto
            currencies like bitcoin,litecoin and many more.
          </p>
        </div>
        <div className="mt-sm-4 mt-2 gap-1 flex-wrap d-flex divForm col-11">
          <div className=" col-8 d-flex flex-column flex-wrap justify-content-center align-items-start ">
            {" "}
            <p className="">
              Vivamus faucibus blandit neque, a lobortis purus congue sed.
              Mauris dapibus mi in felis consectetur blandit. In pellentesque,
              magna id eleifend scelerisque, odio augue interdum ex, id mollis
              purus enim ac risus. Fusce dui sem, faucibus quis ligula quis,
              dictum fermentum mauris. Morbi eu est dolor. Maecenas bibendum a
              urna ut ultricies. Vivamus vulputate et leo eu imperdiet. Proin
              nec dui mi. Etiam euismod felis eu laoreet mattis. Nullam tempus
              lobortis eros at rhoncus. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Morbi vitae
              mauris ac mauris aliquam venenatis. In volutpat quam sit amet odio
              luctus aliquet. Vivamus ultricies ante lobortis metus maximus, at
              posuere ex blandit. Sed et lectus mollis, sagittis ex eget,
              malesuada lectus. Mauris placerat luctus tellus ac malesuada. In
              ipsum erat, egestas et dolor consectetur, pellentesque placerat
              nisi. Donec sodales ut lorem ac accumsan. Proin pulvinar tincidunt
              ex sed rhoncus. Aliquam pharetra erat at ante ultricies, in
              blandit justo iaculis. Aliquam tempor ac est ut sollicitudin.
            </p>
          </div>
          <div className=" col-3 d-flex flex-column flex-wrap  justify-content-start align-items-start ">
            {" "}
            <img className="w-100 " src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

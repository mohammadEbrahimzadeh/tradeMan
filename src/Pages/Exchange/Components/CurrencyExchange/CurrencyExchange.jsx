import React from "react";
import { Link } from "react-router-dom";
import CurrencyTable from "../../../globalComponents/CurrencyTable/CurrencyTable";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { FundamentalData } from "react-ts-tradingview-widgets";

export default function CurrencyExchange() {
  return (
    <div className=" CurrencyExchange   col-12 text-white">
      <div className="d-flex align-items-center flex-column-reverse flex-md-row col-12 justify-content-between">
        {" "}
        <div className="SymbolInfo mt-3 iframeTagx col-md-8 col-12  ">
          {" "}
          <SymbolInfo
            colorTheme="dark"
            symbol="eurUsd"
            largeChartUrl="false "
            autosize
          ></SymbolInfo>
        </div>
        <div className="  d-flex flex-column col-8 align-items-center justify-content-center p-3 bg-dark col-md-3">
          <div className="d-flex pb-1 flex-wrap border-bottom  col-12 justify-content-between align-items-center ">
            <div className=" d-flex  align-items-center justify-content-center">
              <h1 className="m-0 p-0 ">کیف پول</h1>
            </div>
            <div className="  d-flex mt-1 align-items-center justify-content-center">
              <h1 className="m-0 p-0">USDIRR</h1>
            </div>
          </div>
          <div className=" col-12 flex-wrap pt-md-4 pt-2 d-flex gap-1  align-items-center justify-content-center p-md-3 ">
            <Link to={"/login"}>
              {" "}
              <strong className="text-success">وارد شوید</strong>{" "}
            </Link>{" "}
            <p className="p-0 m-0">یا</p>
            <Link to={"/login"}>
              <strong className="text-success">ثبت نام</strong>
            </Link>
            <p className="p-0 m-0">کنید</p>
          </div>
        </div>
      </div>
      <div className="m-md-5 m-3">
        <CurrencyTable dPlay={"d-none"}></CurrencyTable>
      </div>
      <div className="mt-md-5 iframeTagx mt-2 h-50">
        <AdvancedRealTimeChart
          width={"100%"}
          theme="dark"
          symbol="eurusd"
        ></AdvancedRealTimeChart>
      </div>
      <div className=" my-md-5 my-3  flex-wrap d-flex flex-sm-row flex-column  align-items-center justify-content-evenly">
        <div className="col-12 mt-sm-0 mt-3 iframeTagx  ">
          <FundamentalData
            colorTheme="dark"
            height={400}
            width="100%"
            symbol="EURUSD"
          ></FundamentalData>
        </div>
      </div>
      <div className="bg-dark p-sm-4 p-3 align-items-center d-flex flex-column ">
        <div className="d-flex  col-12 border-bottom pb-3 align-items-center justify-content-start">
          <h1 className="m-0 p-0">تاریخچه معاملات</h1>
        </div>{" "}
        <div className=" col-12 flex-wrap   pt-4 d-flex gap-1  align-items-center justify-content-center ">
          <Link to={"/login"}>
            {" "}
            <strong className="text-success">وارد شوید</strong>{" "}
          </Link>{" "}
          <p className="p-0 m-0">یا</p>
          <Link to={"/login"}>
            <strong className="text-success">ثبت نام</strong>
          </Link>
          <p className="p-0 m-0">کنید</p>
        </div>
      </div>
    </div>
  );
}

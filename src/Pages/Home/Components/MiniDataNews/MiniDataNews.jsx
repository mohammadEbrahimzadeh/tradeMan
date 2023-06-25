import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

export default function MiniDataNews() {
  return (
    <>
      <div
        className={`
    MiniDataNews  mx-md-4 flex-column my-2  mx-2 justify-content-center  p-md-3  align-items-center  d-flex 
  `}
      >
        <div className="col-12 TickerTape ">
          <TickerTape
            className="TickerTape"
            colorTheme="dark"
            displayMode="compact"
            isTransparent="false"
            locale="en"
            largeChartUrl="false"
          ></TickerTape>
        </div>
        {/* --------------- */}
      </div>
    </>
  );
}

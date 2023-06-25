import React from "react";
import Header from "./Components/Header/Header";
import MiniDataNews from "./Components/MiniDataNews/MiniDataNews";
import CurrencyTable from "../globalComponents/CurrencyTable/CurrencyTable";
import SiteFeatures from "./Components/SiteFeatures/SiteFeatures";
import EveryWhere from "./Components/EveryWhere/EveryWhere";
import AboutPlatform from "./Components/AboutPlatform/AboutPlatform";
import Blog from "./Components/Blog/Blog";
export default function Home() {
  return (
    <div>
      {" "}
      <Header></Header>
      <MiniDataNews></MiniDataNews>
      <div className="m-md-5 m-3">
        <CurrencyTable dPlay={"d-flex"}></CurrencyTable>
      </div>
      <SiteFeatures></SiteFeatures>
      <EveryWhere></EveryWhere>
      <AboutPlatform></AboutPlatform>
      <Blog></Blog>
    </div>
  );
}

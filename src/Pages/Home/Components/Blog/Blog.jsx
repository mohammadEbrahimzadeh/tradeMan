import React from "react";
import img1 from "../../../../img/postfeaturedimage.jpg";
import img2 from "../../../../img/postfeaturedimage2.jpg";
import img3 from "../../../../img/postfeaturedimage3.jpg";

export default function Blog() {
  return (
    <div className="Blog  mb-4 px-3 px-sm-0 pt-5">
      <h1 className="text-white text-center">Blog</h1>
      <div
        id="divCardBlog"
        className="divCardBlog mt-3 d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center align-items-sm-start"
      >
        <div className=" d-flex flex-column align-items-start justify-content-center col-sm-3 col-12  p-4">
          <img src={img1} className="w-100" alt="img1" />
          <a href="#divCardBlog">
            {" "}
            <h1 className="mt-3  ">
              Kazakhstan Develops New Program to Team Up Crypto Exchanges with
              Banks
            </h1>
          </a>

          <p className="text-white p-0 m-0 ">
            As countries across the world intensify efforts to attract crypto
            industry players, the authorities of Kazakhs...
          </p>
        </div>{" "}
        <div className=" col-sm-3 col-12  p-4 d-flex flex-column align-items-start justify-content-center">
          <img src={img2} className="w-100" alt="img1" />
          <a href="#divCardBlog">
            {" "}
            <h1 className="mt-3  ">
              Bitcoin Better at Tackling Rate Hikes than Ethereum, Stocks -
              Report
            </h1>
          </a>

          <p className="text-white p-0 m-0">
            Bitcoin (BTC) is the best asset to “moderate the economic impact” of
            major interest rate announcements, accord...
          </p>
        </div>{" "}
        <div className=" col-sm-3 col-12  p-4 d-flex flex-column align-items-start justify-content-center">
          <img src={img3} className="w-100" alt="img1" />
          <a href="#divCardBlog">
            {" "}
            <h1 className="mt-3 ">
              البيتكوين تنخفض إلى 21 ألف دولار والإيثريوم عند 1100 دولار
            </h1>
          </a>

          <p className="text-white p-0 m-0">
            تسارع سعر البيتكوين في الخسائر إلى ما دون 22,000 دولار أمريكي. ارتفع
            سعر الإيثيريوم إلى ما دون 1120 دولار واقت...
          </p>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

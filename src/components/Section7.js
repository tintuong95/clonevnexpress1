import React from "react";
import Card1 from "./common/Card1.js";
import Card11 from "./common/Card11.js";

export default function Section7() {
  return (
    <div className="m-auto flex flex-row" style={{ width: 1100 }}>
      <div style={{ width: 720 }}>
        <div className="nav-child1 flex flex-row gap-4 mb-4 ">
          <a href="#" className="font-semibold ">
            Kinh doanh
          </a>
          <a href="#">Quốc tế</a>
          <a href="#">Doanh nghiệp</a>
          <a href="#">Doanh nghiệp</a>
          <a href="#">Doanh nghiệp</a>
          <a href="#">Doanh nghiệp</a>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1/2 bg-slate-100 p-4">
            <Card1 />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className=" bg-slate-100 p-4">
              {" "}
              <Card1 />
            </div>
            <div className=" bg-slate-100 p-4">
              {" "}
              <Card1 />
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="nav-child1 flex flex-row gap-4 mb-4 ">
            <div className="w-1/2 border-r-2 pr-4">
              <a href="#" className="font-semibold ">
                Ý kiến
              </a>
              <Card11 />
              <hr className="my-4" />
              <Card1 />
              <hr className="my-4" />
              <Card1 />
            </div>

            <div className="w-1/2 pr-4">
              <a href="#" className="font-semibold ">
                Ý kiến
              </a>
              <Card11 />
              <hr className="my-4" />
              <Card1 />
              <hr className="my-4" />
              <Card1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

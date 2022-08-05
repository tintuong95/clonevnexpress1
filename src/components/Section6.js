import React from "react";
import Card10 from "./common/Card10.js";
import Card8 from "./common/Card8.js";
import Card9 from "./common/Card9.js";

const Section6 = () => {
  return (
    <div style={{width:1100}} className="m-auto">
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
      <div className="flex flex-row w-full gap-4">
        <div className=" border-r-2 pr-4" style={{width:500}}>
            <Card8/>
        </div>
        <div className=" border-r-2 pr-4" style={{width:240}}>
            <Card9/>
            <hr className="mb-4"/>
            <Card9/>
        </div>
        <div className="w-1/3 pr-4">
            <Card10/>
            <hr  className="my-4"/>
            <Card10/>
            <hr  className="my-4"/>
            <Card10/>
            <hr  className="my-4"/>
            <Card10/>
            <hr  className="my-4"/>
        </div>

      </div>
    </div>
  );
};

export default Section6;

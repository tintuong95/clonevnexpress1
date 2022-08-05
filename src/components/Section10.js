import React from "react";
import Card14 from "./common/Card14.js";
import Card9 from "./common/Card9.js";

export default function Section10() {
  return (
    <div className="m-auto" style={{ width: 1100 }}>
       
      <div className="flex flex-row w-full gap-5">
        <div className="w-1/2">
          <Card14 />
        </div>
        <div className="w-1/2">
          <Card14 />
        </div>
      </div>
     <div className="bg-gray-100 p-4 border mt-4">
     <div className="mt-1"><a
            href="#"
            className="font-semibold text-base border-b pb-1 border-b-red-700 "
          >
            Xem nhiều
          </a></div>
      <div className="flex flex-row w-full mt-5">
        <div className="w-1/4  pr-5 ">
          <Card9 />
        </div>
        <div className="w-1/4 pr-5 ">
          <Card9 />
        </div>
        <div className="w-1/4 pr-5 ">
          <Card9 />
        </div>
        <div className="w-1/4 pr-5 ">
          <Card9 />
        </div>
      </div>
     </div>
    </div>
  );
}

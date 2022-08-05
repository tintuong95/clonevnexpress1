import React from "react";
import Card1 from "./common/Card1.js";
import Card15 from "./common/Card15.js";

export default function Section8() {
  return (
    <div className="m-auto " style={{ width: 1100 }}>
      <div>
        <a
          href="#"
          className="font-semibold text-base border-b pb-1 border-b-red-700 "
        >
          Ảnh
        </a>
      </div>
      <div className="flex flex-row mt-4">
        <img style={{width:800}} src="https://picsum.photos/800/480" alt="" />
<div className="bg-neutral-800 text-gray-300 " style={{width:300}}>
    <div className="p-4">
    <Card15/>
    </div>
    <div className="p-4">
    <Card15/>
    </div>
    
</div>

      </div>
    </div>
  );
}

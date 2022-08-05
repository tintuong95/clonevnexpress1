import React from "react";
import "../styles/Section2.css";
import BoxCategory from "./common/BoxCategory.js";
import Card1 from "./common/Card1.js";
import Card2 from "./common/Card2.js";
import Card3 from "./common/Card3.js";
import Card4 from "./common/Card4.js";
export default function Selection2() {
  return (
    <div className="section2 m-auto flex flex-row ">
      <div className="section2-left" style={{ width: 380 }}>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="section2-right p-4">
     <BoxCategory/>
     <hr className="my-4"/>
     <BoxCategory/>
     <hr className="my-4"/>
     <BoxCategory/>
     <hr className="my-4"/>
     <BoxCategory/>
     <hr className="my-4"/>
     <BoxCategory/>
     <hr className="my-4"/>
     <BoxCategory/>
      </div>
    </div>
  );
}

import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import NavbarTwo from "../components/NavbarTwo.js";
import Section1 from "../components/Section1.js";
import Section10 from "../components/Section10.js";
import Selection2 from "../components/Section2.js";
import Section3 from "../components/Section3.js";
import Section4 from "../components/Section4.js";
import Section5 from "../components/Section5.js";
import Section6 from "../components/Section6.js";
import Section7 from "../components/Section7.js";
import Section8 from "../components/Section8.js";
import Section9 from "../components/Section9.js";

const Main = () => {
  return (
    <>
      <Navbar />
      <hr />
      <NavbarTwo />
      <hr />
      <Section1/>
      <hr className="line m-auto"/>
      <Selection2/>
      <hr className="line m-auto"/>
      <Section3/>
      <hr className="line m-auto my-4"/>
      <Section4/>
      <hr className="line m-auto my-4"/>
      <Section5/>
      <hr className="line m-auto my-4"/>
      <Section6/>
      <hr className="line m-auto my-4"/>
      <Section6/>
      <hr className="line m-auto my-4"/>
      <Section6/>
      <hr className="line m-auto my-4"/>
      <Section7/>
      <hr className="line m-auto my-4"/>
      <Section8/>
      <hr className="line m-auto my-4"/>
      <Section9/>
      <hr className="line m-auto my-4"/>
      <Section10/>
      <hr className="line m-auto my-4 border-t-8"/>
      <Footer/>
    </>
  );
};

export default Main;

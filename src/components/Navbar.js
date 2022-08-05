import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <h1 className="m-auto navbar flex flex-row items-center p-3 ">
      <div className="navbar-left flex w-1/3">
        <div className="logo pr-6 border-r border-r-indigo-200">
          <img src={Logo} alt="logo" />
        </div>
        <p className="time mt-1 ml-3">Thứ Name, 4/8/2022</p>
      </div>
      <div className="navbar-right flex w-2/3 justify-end">
        <button className="border py-1 px-2 rounded-sm mr-3"> Mới nhất</button>
        <button className="border py-1 px-2 rounded-sm mr-4">International</button>
        <div className=" border-r border-r-indigo-200 mr-4 my-1"></div>
        <input type="text" className="border py-1 px-2 rounded-sm search rounded-l-3xl border-r-0" placeholder="Tìm kiếm"/>
        <button className="border py-1 px-2 border-l-0 rounded-sm mr-4 rounded-r-3xl"><i class="fa fa-search"></i></button>
        <button > <i className="fa fa-user mr-2 text-gray-400"></i>Đăng nhập</button>
      </div>
    </h1>
  );
}

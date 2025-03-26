import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LuSquareArrowLeft, LuSquareArrowRight } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./nav.css"

const Nav = () => {
  const Hide = (item) => {
    let name = `#cl${item}`;
    let classNames = document.querySelector(name);
    if (classNames.classList.contains("hidden")) {
      classNames.classList.remove("hidden");
    } else {
      classNames.classList.add("hidden");
    }
  };

  const HideSide = () => {
    document.querySelector("#side").classList.add("hidden");
    document.querySelector("#to-left").classList.add("hidden");
    document.querySelector("#to-right").classList.remove("hidden");
  };

  const ShowSide = () => {
    document.querySelector("#side").classList.remove("hidden");
    document.querySelector("#to-left").classList.remove("hidden");
    document.querySelector("#to-right").classList.add("hidden");
  };

  return (
    <div className="w-full h-full flex">
      <p
        className="text-2xl mt-3 ml-2 text-white absolute left-80 bold z-0 text-center cursor-pointer"
        id="to-left"
        onClick={() => HideSide()}
      >
        <LuSquareArrowLeft />
      </p>
      <p
        className="text-2xl text-white mt-3 ml-2 absolute bold text-center hidden cursor-pointer"
        id="to-right"
        onClick={() => ShowSide()}
      >
        <LuSquareArrowRight />
      </p>
      <div
        className="colors bg-blue-950 p-4 w-80 h-screen overflow-y-scroll "
        id="side"
      >
        <h1 className="text-white text-4xl font-bold text-center">
          <span className="text-sky-400">TRAN</span>SACT
        </h1>
        <div className="text-white">
          <a href="/user" className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
            <IoHome className="mr-4" />
            Dashboard
          </a>
          <div
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex justify-between items-center w-full cursor-pointer"
            onClick={() => {
              Hide("one");
            }}
          >
            <span className="inline-flex items-center">
              <IoIosPeople className="mr-4 text-lg" />
              Customers
            </span>
            <FaAngleDown />
          </div>
          <ul className="opacity-95 bg-white bg-opacity-5 hidden" id="clone">
            <a href="/user/customers" className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Add Customer
            </a>
            <a href="/user/customers/modify" className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Modify Customers
            </a>
            <a href="/user/customers/list" className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Customer Details
            </a>
          </ul>
          <div
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex justify-between items-center w-full cursor-pointer"
            onClick={() => {
              Hide("two");
            }}
          >
            <span className="inline-flex items-center">
              <FaShoppingCart className="mr-4 text-base" />
              Products
            </span>
            <FaAngleDown />
          </div>
          <ul className="opacity-95 bg-white bg-opacity-5 hidden" id="cltwo">
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Product Details
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Add Product
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Modify Products
            </div>
          </ul>
          <div
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex justify-between items-center w-full cursor-pointer"
            onClick={() => {
              Hide("three");
            }}
          >
            <span className="inline-flex items-center">
              <FaPeopleCarryBox className="mr-4 text-lg" />
              Supplier
            </span>
            <FaAngleDown />
          </div>
          <ul className="opacity-95 bg-white bg-opacity-5 hidden" id="clthree">
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Supplier Details
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Add Supplier
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Modify Supplier
            </div>
          </ul>
          <div
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex justify-between items-center w-full cursor-pointer"
            onClick={() => {
              Hide("four");
            }}
          >
            <span className="inline-flex items-center">
              <GrMoney className="mr-4 text-lg" />
              Accounts
            </span>{" "}
            <FaAngleDown />
          </div>
          <ul className="opacity-95 bg-white bg-opacity-5 hidden" id="clfour">
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Accounts Details
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Add Account
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Modify Account
            </div>
          </ul>
          <div
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex justify-between items-center w-full cursor-pointer"
            onClick={() => {
              Hide("five");
            }}
          >
            <span className="inline-flex items-center">
              <TbReport className="mr-4 text-lg" />
              Reports
            </span>
            <FaAngleDown />
          </div>
          <ul className="opacity-95 bg-white bg-opacity-5 hidden" id="clfive">
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Reports Details
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Customers Report
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Products Report
            </div>
            <div className="px-4 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
              <FaCheck className="mr-4 text-sm" />
              Account Report
            </div>
          </ul>
          <div className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
            <CgProfile className="mr-4" />
            Profile
          </div>
          <div className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full">
            <BiSupport className="mr-4" />
            Call Support
          </div>
          <a
            href="/"
            className="px-2 py-1 rounded-md hover:bg-blue-900 inline-flex items-center w-full cursor-pointer"
          >
            <ImExit className="mr-4" />
            Log-out
          </a>
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;

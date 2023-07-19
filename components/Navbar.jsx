import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FaAngleRight, FaSistrix, IconName } from "react-icons/fa";
import {
  BiBell,
  BiDotsHorizontal,
  BiFile,
  BiSolidUserCircle,
} from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  const path = usePathname();
  const navLink = (
    <>
      <ul className="flex gap-4">
        <li className={`${path.includes("/dashboard") ? "text-green-500" : ""} `}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={`${path.startsWith("/about") ? "text-green-500" : ""} `}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={`${path.includes("/news") ? "text-green-500" : ""} `}>
          <Link href="/news">News</Link>
        </li>
        <li
          className={`${
            path.startsWith("/userPolicy") ? "text-green-500" : ""
          }`}
        >
          <Link href="/userPolicy">User Policy</Link>
        </li>
        <li
          className={`${path.startsWith("/contact") ? "text-green-500" : ""} `}
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li className={`${path.startsWith("/more") ? "text-green-500" : ""} `}>
          <Link href="/more">
            <BiDotsHorizontal className="h-4 w-4 text-gray-400" />
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <div className="fixed z-10 flex justify-around items-center  text-black border-b p-4 w-full">
        <div className="">
          <a className=" normal-case font-bold">Constructor</a>
        </div>

        <div className="text-xs">{navLink}</div>

        <div className="border-2 flex items-center rounded-full w-2/6 justify-between bg-white">
          <div className="flex items-center">
            <FaSistrix className="h-6 ml-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Products, Orders and Clients"
              className="input text-xs w-full "
            />
          </div>
          <FaAngleRight className="h-4 text-gray-400 mr-4 " />
        </div>
        <div className="flex items-center gap-4">
          <BiSolidUserCircle className="h-8 w-8 text-gray-400" />
          <p className="text-sm font-semibold">Clayton Santos</p>
          <div className="border rounded-full p-2 bg-white ">
            <BiBell className="h-6 w-6 text-gray-400 " />
          </div>
          <div className="border rounded-full p-2 bg-white ">
            <RxCrossCircled className="h-6 w-6 text-gray-400 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

const DoneList = () => {
  return (
    <div>
      <div className="flex text-sm gap-2 items-center py-4 border rounded-lg  bg-white">
        <div className="bg-green-600  rounded-r-3xl w-[3px] h-[35px]"></div>
        <div className="flex justify-center w-full ">
          <div className="flex  items-center gap-16">
            <div className="flex justify-center items-center gap-5">
            <h2 className="font-bold">Done</h2>
              <p>5</p>
            </div>

            <div className="flex justify-center items-center gap-5">
              <BiDotsHorizontal className="w-6 h-6 text-gray-400" />
              <FaPlus className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneList;

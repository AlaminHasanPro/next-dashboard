import React from "react";
import { FaSistrix } from "react-icons/fa";

const ContentBar = () => {
  return (
    <div>
      <div className="flex items-center justify-around p-4 border-b-2 ">
        <div className="flex items-center text-xs">
          <div className="px-6">List Tasks</div>
          <div className="px-6">Boards</div>
          <div className="px-6">Calendar</div>
          <div className="px-6">Grantt</div>
          <div className="px-6">Timeline</div>
          <div className="px-6">Activity</div>
        </div>
        <div className="border-2 flex items-center rounded-full w-1/4 pr-4 justify-between bg-white">
          <div className="flex items-center">
            <FaSistrix className="h-6 ml-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Tasks"
              className="input text-xs w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBar;

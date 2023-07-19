import Image from "next/image";
import {
  BiBell,
  BiDotsHorizontal,
  BiFile,
  BiSolidUserCircle,
} from "react-icons/bi";
import { IconName, MdDashboard } from "react-icons/md";

const UserItems = () => {
  return (
    <div>
      <div className="flex justify-between mx-4 my-2">
        <BiSolidUserCircle className="w-8 h-8 text-gray-400" />
        <BiDotsHorizontal className="w-8 h-8 text-gray-400" />
      </div>
      <div className="text-center flex justify-center my-4 flex-col">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9nlPcND2od0kt4ue74I5AM5UBIQ-VulJCg&usqp=CAU"
          alt=""
          className="h-[140px] w-[200px] mx-auto"
        />

        <h2 className="text-sm font-bold my-2">Hello Alfred Bryant</h2>
        <p className="text-xs">adrain.nader@yahoo.com</p>
      </div>
      <div className="grid md:grid-cols-2 my-8">
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
        <div className="p-8 border-2 flex flex-col items-center justify-center">
          <MdDashboard className="w-10 h-10 text-gray-400" />
          <p className="text-sm mt-4">Hero</p>
        </div>
      </div>
    </div>
  );
};

export default UserItems;

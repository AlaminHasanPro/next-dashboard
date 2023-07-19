"use client";

import ContentArea from "@/components/ContentArea";
import Sidebar from "@/components/sidebar";
import UserItems from "@/components/UserItems";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 flex w-full ">
      <div className="border-r-2">
        <Sidebar />
      </div>

      <div className="w-1/4 mt-4">
        <UserItems />
      </div>
      <div className="w-3/4 mt-4 rounded-lg border-2 ">
        <ContentArea />
      </div>
    </div>
  );
};

export default page;

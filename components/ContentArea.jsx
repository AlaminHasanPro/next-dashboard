import React from "react";
import { FaSistrix } from "react-icons/fa";
import ContentBar from "./ContentBar";
import DoneList from "./ListComponents/DoneList";
import InWork from "./ListComponents/InWorkList";
import ReviewList from "./ListComponents/ReviewList";
import ToDoList from "./ListComponents/ToDoList";

const ContentArea = () => {
  return (
    <div className="">
      <ContentBar />
      <div className="grid grid-cols-4 gap-4 mx-6 mt-8">
        <div className="">
          <ToDoList />
        </div>
        <div className="">
          <InWork />
        </div>
        <div className="">
          <ReviewList />
        </div>
        <div className="">
          <DoneList />
        </div>
      </div>
    </div>
  );
};

export default ContentArea;

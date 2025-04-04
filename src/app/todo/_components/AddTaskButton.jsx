import React from "react";
import { FormAddTaskComponent } from "./FormAddTaskComponent";

function AddTaskButton() {
  return (
    <section className="flex justify-center items-center gap-x-3">
      <div className=" w-fit">
        <FormAddTaskComponent />
      </div>
      <figure className="h-10 w-10 bg-white flex flex-col gap-y-1 justify-center items-center  gap-x-1  rounded-full shadow-md">
        <div className="flex justify-center items-center gap-1">
          {" "}
          <span className="h-2 w-2 rounded-full bg-persian-green"></span>
          <span className="h-2 w-2 rounded-full bg-watermelon-red"></span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-royal-blue"></span>
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
        </div>
      </figure>
    </section>
  );
}

export default AddTaskButton;

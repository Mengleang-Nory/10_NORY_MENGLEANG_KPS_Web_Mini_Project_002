"use client";

import { updateTaskActionStatusByIdAndByWorkspaceId } from "@/action/task/updateTaskActionStatusByIdAndByWorkspaceId";
import { UpdateAndDeleteButton } from "@/app/todo/_components/UpdateAndDeleteButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { set } from "date-fns";
import { Clock, Ellipsis } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function CardComponent({ cardData, color }) {
  const [taskValue, setTaskValue] = React.useState("");
  const [taskId, setTaskId] = React.useState("");

  const workspaceId = usePathname().split("/")[2];

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short", // Apr
      day: "2-digit", // 04
      year: "numeric", // 2025
    });
  };

  const handleChange = async (value, taskId) => {
    const res = await updateTaskActionStatusByIdAndByWorkspaceId(
      taskId,
      workspaceId,
      value
    );
  };

  return (
    <>
      {cardData?.map((card) => (
        <div
          key={card.taskId}
          className="border border-gray-300 rounded-xl mt-8"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold capitalize">{card.taskTitle}</h2>
              <UpdateAndDeleteButton taskId={card.taskId} />
            </div>

            {/* task detials */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
              {card.taskDetails}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {card.tag}
              </p>

              {/* status */}
              {/* <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div> */}
              <div
                className="rounded-full w-8 h-8 bg-watermelon-red"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>

          {/* progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <div>
              <Select
                onValueChange={(value) => {
                  setTaskValue(value);
                  setTaskId(card.taskId);
                  handleChange(value, card.taskId);
                }}
              >
                <SelectTrigger
                  className="w-36 truncate border p-2"
                  style={{ borderColor: color, color: color }}
                >
                  <SelectValue placeholder={card.status} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="FINISHED">FINISHED</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* date */}
            <p className="flex gap-3 text-light-steel-blue">
              <Clock size={22} /> {formatDate(card.endDate)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

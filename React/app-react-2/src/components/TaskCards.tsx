import { useState } from "react";
import { Task } from "../types/types";
import TrashIcon from "./icons/TrashIcons";

interface Props {
  task: Task
}

function TaskCard({ task }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false)

  return (
    <div className="gap-4 p-2 overflow-x-hidden overflow-y-auto bg-slate-800 my-2 rounded-md h-[100px] min-h-[100px] items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      onMouseEnter={() => { setMouseIsOver(true) }}
      onMouseLeave={() => { setMouseIsOver(false) }}>
      {task.content}
      {
        mouseIsOver && (
          <button className="stroke-white absolute right-4 top-1/2-traslate-y-1/2 bg-slate-700 p-2 rounded hover:bg-rose-500">
            <TrashIcon />
          </button>
        )
      }
    </div>
  )
}

export default TaskCard;
import { useState } from "react";
import { Id, Task } from "../types/types";
import TrashIcon from "./icons/TrashIcons";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void; 
}

function TaskCard({ task, deleteTask }: Props): JSX.Element {
  const [mouseIsOver, setMouseIsOver] = useState(false)

  return (
    <div className="gap-4 p-2 bg-slate-800 my-2 rounded-md h-[100px] min-h-[100px] items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      onMouseEnter={() => { setMouseIsOver(true) }}
      onMouseLeave={() => { setMouseIsOver(false) }}>
      {task.content}
      {
        mouseIsOver && (
          <button className="stroke-white absolute right-4 top-1/2-traslate-y-1/2 bg-slate-700 p-2 rounded hover:bg-rose-500 opacity-60 hover:opacity-100"
            onClick={() => deleteTask(task.id)}>
            <TrashIcon />
          </button>
        )
      }
    </div>
  )
}

export default TaskCard;
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Task = (props) => {
  return (
    <div>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <div key={task.id} class="flex justify-center items-center">
            <ul>
              <li class="px-2 py-2  w-72 bg-slate-50 flex justify-between items-center m-2">
                {task.name}
                <div class="flex justify-center items-center ">
                  <FaEdit
                    class="cursor-pointer fill-blue-500 text-[24px]"
                    onClick={() => props.editTask(task)}
                  />
                  <FaTrash
                    class="cursor-pointer fill-red-500 text-[24px]"
                    onClick={() => props.deleteTask(task.id)}
                  />
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No Task</p>
      )}
    </div>
  );
};

export default Task;

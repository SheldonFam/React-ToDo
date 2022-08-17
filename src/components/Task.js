import React from "react";

const Task = (props) => {
  return (
    <div>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <div key={task.id} class="flex justify-center items-center">
            <ul class="min-w-[80%]">
              <div class="bg-slate-50 flex justify-space-between items-center m-2">
                <li class="px-4 w-72">{task.name}</li>
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={() => props.editTask(task)}
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                  onClick={() => props.deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
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

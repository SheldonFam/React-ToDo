import React, { useState, useEffect } from "react";

const EditTask = (props) => {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  return (
    <div class="flex flex-col items-center justify-center">
      <form
        class="pt-6 pb-8"
        onSubmit={(event) => {
          event.preventDefault();
          props.updateTask(task.id, task);
        }}
      >
        <input
          class="mx-2 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          value={task.name}
          onChange={handleInputChange}
        />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;

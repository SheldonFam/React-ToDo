import React, { useState } from "react";

const AddTask = (props) => {
  const initialFormState = { id: null, name: "" };

  const [task, setTask] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setTask({ ...task, [name]: value });
  };

  return (
    <div class="w-full">
      <form
        class="pt-6 pb-6"
        onSubmit={(event) => {
          event.preventDefault();

          if (!task.name) return;
          props.addTask(task);
          setTask(initialFormState);
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;

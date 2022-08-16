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
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!task.name) return;
        props.addTask(task);
        setTask(initialFormState);
      }}
    >
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTask;

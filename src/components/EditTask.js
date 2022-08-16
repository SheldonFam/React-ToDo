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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTask(task.id, task);
      }}
    >
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <button>Update</button>
    </form>
  );
};

export default EditTask;

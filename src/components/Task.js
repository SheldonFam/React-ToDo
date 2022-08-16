import React from "react";

const Task = (props) => {
  return (
    <div>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <div key={task.id}>
            <ul>
              <li>{task.name}</li>
              <button onClick={() => props.editTask(task)}>Edit</button>
              <button onClick={() => props.deleteTask(task.id)}>Delete</button>
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

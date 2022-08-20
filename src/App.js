import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import EditTask from "./components/EditTask";

const App = () => {
  const tasksList = [
    { id: 1, name: "todo1" },
    { id: 2, name: "todo2" },
    { id: 3, name: "todo3" },
  ];
  const [tasks, setTasks] = useState(tasksList);

  const addTask = (task) => {
    //cretate task id manually.
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const initialFormState = { id: null, name: "" };

  const [editing, setEditing] = useState(false);

  const [currentTask, setCurrentTask] = useState(initialFormState);

  const editTask = (task) => {
    setEditing(true);
    setCurrentTask({ id: task.id, name: task.name });
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="px-4 py-4 border-solid border-2 border-indigo-600 rounded-md shadow-xl">
        <h1 class="text-3xl text-center">React Todo</h1>
        {editing ? (
          <EditTask
            setEditing={setEditing}
            currentTask={currentTask}
            updateTask={updateTask}
          />
        ) : (
          <AddTask addTask={addTask} />
        )}
        <Task tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;

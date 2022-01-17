import "./App.css";
import { useState } from "react";

import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task1",
      day: "Jan 20 at 1:30",
      reminder: true,
    },
    {
      id: 2,
      text: "task2",
      day: "Jan 21 at 1:30",
      reminder: false,
    },
    {
      id: 3,
      text: "task3",
      day: "Jan 22 at 1:30",
      reminder: false,
    },
    {
      id: 4,
      text: "task4",
      day: "Jan 19 at 1:30",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    console.log(task)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter(task => task.id !== id))
  };

  // toggle reminder
  const toggleReminder = (id) => {
    console.log("toggle reminder", id)
    setTasks(tasks.map(task  => (task.id===id) ? {...task, reminder : !task.reminder} : task))
  };

  // toggle add
  const toggleAddTask = () => {
    console.log('toggle add')
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="App">
      <Header title="Task Tracker" onAddToggle={toggleAddTask} showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : null}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Pending Task"}      
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "치과 방문",
      day: "3월 29일 14:30",
      reminder: true,
    },
    {
      id: 2,
      text: "팀플 회의",
      day: "4월 1일 17:00",
      reminder: true,
    },
    {
      id: 3,
      text: "제주도 여행",
      day: "4월 3일 09:30",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show."
      )}
    </div>
  );
}

export default App;

import { useState, useRef } from "react";

const AddTask = ({ tasks, onCreate }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const nextId = useRef(4);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: nextId.current,
      text,
      day,
      reminder,
    };

    if (!text) {
      alert("Please add a task");
      return;
    }
    onCreate(newTask);

    setText("");
    setDay("");
    setReminder(false);
    nextId.current += 1;
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time.."
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";

const TaskForm = (props) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="mb-3">
        <input className="form"
          type="text"
          placeholder="Ajouter une tâche"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

      </div>

    </form>
  );
};

export default TaskForm;
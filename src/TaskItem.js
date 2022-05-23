import { useDispatch } from "react-redux";
import {toggleTask, deleteTask } from "./redux";

const TaskItem = (props) => {
  const { task } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <button className="btn-danger"
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" ,margin:"10px" }}
        >
          Supprimer
        </button>
      </label>
    </div>
  );
};

export default TaskItem;
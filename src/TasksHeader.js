import { useSelector } from "react-redux";
const TasksHeader = (props) => {
    const tasks= useSelector((state)=>state.todo);
    const undoneTasks = tasks.filter((t) => t.done === false);
  
    return (
      <header className="header">
        <h1> React : Redux/toolkit</h1>
       
      </header>
    );
  };
  
  export default TasksHeader;
  
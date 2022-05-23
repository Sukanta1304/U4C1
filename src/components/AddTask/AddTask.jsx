import React ,{useState}from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  
  // NOTE: do not delete `data-cy` key value pair
  const [todo,SetTodo]=useState("");
  const handleChange=(e)=>{
    SetTodo(e.target.value)
  };
  const [todos,setTodos]=useState([]);
  const[checked,setChecked]=useState(todo.checked)
  return (
    <div className={styles.todoForm}>
<div>
</div>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button"
      onClick={()=>{
        setTodos()
      }}>+</button>
    </div>
  );
};

export default AddTask;

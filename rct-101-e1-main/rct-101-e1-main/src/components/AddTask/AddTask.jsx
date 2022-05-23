import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const[task, setTask] = useState('')
  // NOTE: do not delete `data-cy` key value pair
  const handleInput = () => {
    let x = setTask(task)
    console.log(x)
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e) => (e.target.value)} value={task}/>
      <button data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;

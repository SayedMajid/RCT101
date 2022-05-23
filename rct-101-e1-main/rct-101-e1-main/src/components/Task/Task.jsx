import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import tasks from "../data/tasks.json"

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
        {tasks.map((task) => {
          return task.name
        })}
      </div>
      <Counter/>
      <button data-cy="task-remove-button"> x </button>
    </li>
  );
};

export default Task;

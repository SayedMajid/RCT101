import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <div data-cy="tasks" className={styles.tasks}>
        <Task/>
      </div>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

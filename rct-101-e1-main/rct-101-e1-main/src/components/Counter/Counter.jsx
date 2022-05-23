import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const[count, setCount] = useState(0)

  const handleIncrement = () =>{
    setCount(count + 1)
  }

  const handleDecrement = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleIncrement}> + </button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleDecrement}> - </button>
    </div>
  );
};

export default Counter;

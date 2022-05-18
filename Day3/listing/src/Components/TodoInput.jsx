import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input  type="text" placehoder="Add Task Here" onChange={handleInput} />
      <button
        onClick={() => {
          console.log(value);
          addTodo(value);
        //   setValue("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;

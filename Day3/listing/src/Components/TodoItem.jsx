import React from 'react'

const TodoItem = ({value, deleteTodo}) => {
  return (
  <div>
      {value}
      <button onClick={() => deleteTodo(value)}>Remove</button>
  </div>
  )
};

export default TodoItem
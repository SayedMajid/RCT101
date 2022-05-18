import React ,{useState}from 'react'
import TodoList from './TodoList' 
import TodoInput from './TodoInput'
import {v4 as uuidv4} from 'uuid'

const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <div id='mainBox'>
        <h1 className='heading'>
          To Do List
        </h1>
        <div>
          {/* Todo input is coming from the todo file  */}
          <TodoInput addTodo={addTodo}/> 
          <TodoList/>
        </div>
    </div>
  )
}

export default Todo
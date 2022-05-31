import './App.css';
import React, {useReducer} from 'react'

const reducer = (counter, action) => {
  switch (action.type){
    case 'Increment':{
      return counter + 1
    }
    case 'Decrement':{
      if(counter > 0) return counter - 1
    }
    default:{
      console.log('Type Incorrect', action.type)
      return counter
    }
  }
}

function App() {
  const [counter , dispatch] = useReducer(reducer , 0)
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({type : 'Increment'})}> + </button>
      <button onClick={() => dispatch({type : 'Decrement'})}> - </button>
    </div>
  );
}

export default App;

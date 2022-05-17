import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

  return (
    <div>
        <h1>Counter App: {count} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
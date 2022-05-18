import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
// import Counter from './Components/Counter';

// import { useState } from 'react';

function App() {

  // const[toggle, setToggle] = useState(false)


  return (
    <div className="App">
      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Show Counter App' : 'Show Todo App'}
      </button> */}
      <Todo/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect } from "react"

function App() {

  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);

  let timer;
  let endPoint = 59
  
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1)
      if(seconds === endPoint){
        setMins(mins + 1);
        setSeconds(0)
      }
    },1000)
    
    return () => clearInterval(timer)
  })

  const resetTimer = () => {
    setSeconds(0);
    setMins(0);
  }

  const stopTimer = () => {
    clearInterval(timer)
  }

  return (
    <div className="App">
      <h1>My Timer App</h1>
      <h1>{mins} : {seconds}</h1>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;

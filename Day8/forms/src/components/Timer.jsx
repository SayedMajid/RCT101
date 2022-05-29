import React from "react";

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);
  const timerId = React.useRef(null);
  const [mins, setMins] = React.useState(0);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 100);
      timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const reset = () => {
    clearInterval(timerId.current);
    setSeconds(0);
    setMins(0);
    timerId.current = null;
  };
  
  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>
        {seconds > 59 ? setMins(mins + 1) : mins}m : {seconds > 59 ? setSeconds(0): seconds}s
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;

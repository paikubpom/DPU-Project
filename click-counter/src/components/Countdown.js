import { useState, useEffect } from "react";

function Countdown() {
    const [counter, setCounter] = useState(10);
    
    useEffect(() => {
      if (counter === 0) {
        return;
      }
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      
      return () => {
        clearInterval(timer);    
      };
    }, [counter]);
      return <h1 className="text-center mt-4 text-2xl font-bold">Countdown: {counter == 0 ? "Time's up" : counter}</h1>
}
export default Countdown;
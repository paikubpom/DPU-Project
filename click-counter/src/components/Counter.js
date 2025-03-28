import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <p className="font-bold text-4xl mt-10 mb-5">Count: {count}</p>
      <button className="bg-blue-500 px-4 py-2 shadow-md rounded text-white" onClick={() => setCount(count + 1)}>Click Me</button>
      <button className="ml-1 bg-red-500 px-4 py-2 shadow-md rounded text-white" onClick={() => setCount(count - 1)}>Kick Me!!!</button>
    </div>
  );
}
export default Counter;
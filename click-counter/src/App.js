import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <Counter />
      <Clock />
      <Countdown/>
    </div>
  );
}

export default App;

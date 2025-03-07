import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
// import Heading from "./components/Heading";
import Heading2 from "./components/Heading2";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Heading2 title="Dashboard" subtitle="Welcome to my dashboard" />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
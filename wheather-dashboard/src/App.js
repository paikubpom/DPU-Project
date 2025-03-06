import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

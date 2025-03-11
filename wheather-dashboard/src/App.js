import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
// import Heading from "./components/Heading";
import Heading2 from "./components/Heading2";
import "./Dashboard.css"

const Cities = ["Bangkok", "London", "Tokyo", "Beijing", "Paris"];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Heading2 title="Dashboard" subtitle="Welcome to my dashboard" />
        <table>        
          <tr>
              {Cities.map((city) => (
                <td key={city} className="box">
                  <Dashboard city={city} />
                </td>
              ))}
            </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
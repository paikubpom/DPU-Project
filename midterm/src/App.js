import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';
import Heading from './components/Heading';
import CardGrid from './components/CardGrid';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Heading title="Home Page" subtitle="Welcome to our React app with Tailwind and API fetching!" />
      <Dashboard/>
    </div>
  );
}

export default App;

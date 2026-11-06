import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

// import './App.css';
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import Contact from './pages/Contact.js';

// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


// function App() {
//   return (
    
//     <Router>
//       <div>
//          <switch>

//             <Route path = "/">
//                <Home/>
//             </Route>

//             <Route path = "/About">
//                <About/>
//             </Route>

//          </switch>
//      </div>
//   </Router>

//   );
// }

// export default App;


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galery from "./pages/Galery";
import Calculate from "./pages/Calculate";
import Calculatea from "./pages/Calculate";
import Accordion from 'react-bootstrap/Accordion';
import Event from "./pages/Event";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Galery" element ={<Galery/>}/>
        <Route path="/Calculate" element ={<Calculatea/>}/>
        <Route path="/Event" element ={<Event/>}/>
      </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
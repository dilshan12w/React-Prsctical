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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
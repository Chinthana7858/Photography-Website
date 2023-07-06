import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import HomePage from './Components/Pages/HomePage';
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
import Blogs from "./Components/Pages/Blogs";

function App() {

  return (
    <Router>
      <Routes>
        <Route 
         path="/"
         element={
         <HomePage/>
        }
         />
        <Route 
         path="/About"
         element={
         <About/>
        }
         />
        <Route 
        path="/Contact"
        element={
        <Contact/>
        }
         />
         <Route 
        path="/Gallery"
        element={
        <Gallery/>
        }
         />
         <Route 
        path="/Blogs"
        element={
        <Blogs/>
        }
         />
      </Routes>
    </Router>
  );
}

export default App;

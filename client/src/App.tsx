import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import HomePage from './Components/Pages/HomePage';
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Portfolio";
import Blogs from "./Components/Pages/Blogs";
import Login from "./Components/Pages/Login";
import UpdateSlider from "./Components/Pages/UpdateSlider";
import Portfolio from "./Components/Pages/Portfolio";
import PortfolioInside from "./Components/Pages/PortfolioInside";
import NewBlog from "./Components/Pages/UpdateBlog";
import UpdateBlog from "./Components/Pages/UpdateBlog";

function App() {

  return (
    <Router>
      <Routes>
        <Route 
         path="/Home"
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
        path="/Portfolio"
        element={
        <Portfolio/>
        }
         />
         <Route 
        path="/Blogs"
        element={
        <Blogs/>
        }
         />
         <Route 
        path="/"
        element={
        <Login/>
        }
         />
         <Route 
        path="/UpdateSlider"
        element={
        <UpdateSlider/>
        }
         />
         <Route 
        path="/Portfolio/:portfolioId"
        element={
        <PortfolioInside/>
        }
         />
         <Route 
        path="/UpdateBlog/:blogId"
        element={
        <UpdateBlog/>
        }
         />
      </Routes>
    </Router>
  );
}

export default App;

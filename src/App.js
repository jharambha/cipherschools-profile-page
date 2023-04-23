import './components/aboutMe/aboutMe';
import './App.css';
import './components/aboutMe/aboutMe'
//import { Router } from 'express';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from './components/aboutMe/aboutMe';
import Banner from './components/banner/banner';
function App() {
  return (
    <Router>
      
      <Banner/>
    </Router>
       
         
       
        
  );
}

export default App;

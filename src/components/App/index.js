/*************/
/***  APP  ***/
/*************/
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import About from '../../components/About';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Nav/>
    </Router>
  );
}

export default App;

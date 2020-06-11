/*************/
/***  APP  ***/
/*************/
import React from 'react';
import './App.css';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Content from '../../components/Content';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router exact path="/">
        <Aside/>
        <Nav/>
        <Content/>
    </Router>
  );
}

export default App;

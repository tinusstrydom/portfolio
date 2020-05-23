/*************/
/***  APP  ***/
/*************/
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment} from 'react';
import './App.css';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import About from '../../components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Aside/>
        /*<Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>*/
      </BrowserRouter>
    </Fragment>
  )
}

export default App;

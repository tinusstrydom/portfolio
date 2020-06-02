/*****************/
/***  Content  ***/
/*****************/
import React from 'react';
import './content.css';
import Home from '../../components/Home';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Work from '../../components/Work';
import Contact from '../../components/Contact';

import {Route, Switch} from 'react-router-dom';

function Content() {
  return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Skills" component={Skills}/>
                <Route exact path="/Experience" component={Experience}/>
                <Route exact path="/Work" component={Work}/>
                <Route exact path="/Contact" component={Contact}/>
            </Switch>
        </div>
    );
}

export default Content;

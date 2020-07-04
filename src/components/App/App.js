import React from 'react';

import {
  HashRouter,
  Route,
  Redirect,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import "./App.css";
import Navigation from "../Navigation/Navigation"

import Manager from "../manager_app/Manager";
import Activist from "../activist_app/Activist";
import King from "../king_app/King";

const App = () => {

  return (
    <>
    <p></p>
      <button onClick={() => window.location.reload()}>Najpierw odśwież, potem pisz tekst!</button>
      
      <HashRouter>
        <> 
          <Navigation />
          <Route exact path='/' component={Manager} />
          <Route path='/activist' component={Activist} />
          <Route path='/king' component={King} />
        </>
      </HashRouter>


    </>
  )

}

export default App;

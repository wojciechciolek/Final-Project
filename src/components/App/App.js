import React from 'react';

import {
  HashRouter,
  Route,
} from 'react-router-dom';

import "./App.css";
import Navigation from "../Navigation/Navigation"

import Manager from "../manager_app/Manager";
import Activist from "../activist_app/Activist";
import King from "../king_app/King";

const App = () => {

  return (
    <>
      <button className="AppReloadButton" onClick={() => window.location.reload()}></button>
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

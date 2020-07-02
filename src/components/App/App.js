import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

      <HashRouter>
        <>
        <Navigation />
          <Route exact path='/' component={Manager}/>
          <Route path='/activist' component={Activist} />
          <Route path='/king' component={King} />

       
        
        </>
      </HashRouter>
    )
  
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Manager />
//         {/* <Partia /> */}
//         {/* <King /> */}

//       </header>
//     </div>
//   );
// }

export default App;

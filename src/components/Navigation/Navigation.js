import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Reload,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

class Navigation extends Component {

    

    render() {
      return (
        <nav>
           {/* <select>
                <option><Link to="/">Manager</Link>Manager</option>
                <option><Link to="/king">King</Link>King</option>
                
            </select> */}



          <ul>
            <li><Link to="/" >Manager</Link></li>
            <li><Link to="/activist">Activist</Link></li>
            <li><Link to="/king">King</Link></li>
           
          </ul>
        </nav>
      );
    }
  }

  export default Navigation;

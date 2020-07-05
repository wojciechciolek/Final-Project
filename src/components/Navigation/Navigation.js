import React, { Component } from 'react';
import './Navigation.css'

import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <nav>
        <button className="ToManagerButton"><Link to="/" >Manager</Link></button>
        <button className="ToActivistButton"><Link to="/activist">Activist</Link></button>
        <button className="ToKingButton"><Link to="/king">King</Link></button>
      </nav>
    );
  }
}

export default Navigation;

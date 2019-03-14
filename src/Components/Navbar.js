import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
        
  <nav id="navbar">
    <div className="nav-wrapper">
      <a  href="./Navbar.js" className="brand-logo">Burguer Queen</a>
      </div>

      <img id="hamburguer" src="https://i.ibb.co/8KQBLQP/hamburger-25358-640.png" alt="hamburger-25358-640" border="0"></img>
  </nav>

      </div>
    );
  }
}

export default Navbar;


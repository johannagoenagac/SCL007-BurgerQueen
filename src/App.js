import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Waiters from './Components/Waiters';




class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Navbar/>
        <Waiters/>
        
       
         
    
      </div>
    );
  }
}




export default App;

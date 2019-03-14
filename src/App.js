import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Waiters from './Components/Waiters';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      
};

    this.receiveName = this.receiveName.bind(this);
    
  }

  receiveName(name){
    this.setState({
      ...this.state,
      name: name
    });
  }

  render() {
    return (
      <div className="App">
       
        <Navbar/>
        <Waiters onNameSelected={this.receiveName}/>
      
    
      </div>
    );
  }
}

export default App;

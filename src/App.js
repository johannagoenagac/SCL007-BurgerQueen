import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Waiters from './Components/Waiters';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      nameC:'',
      
};
    
    this.receiveName = this.receiveName.bind(this);
    this.handleChangeName= this.handleChangeName.bind(this);
  }

  receiveName(){
    this.setState({
      ...this.state,
      name: this.state.nameC,
    });
  }

  handleChangeName(event){
    this.setState({
      ...this.state,
      nameC:event.target.value
      
    })
  }

  render() {
    return (
      <div className="App">
       
        <Navbar/>
        <Waiters 
        onNameSelected={this.receiveName}
        handleChangeName={this.handleChangeName}
        name={this.state.name}
        />
      
    
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header'

class App extends Component{
  constructor(){
    super()
    this.state = {
      currentTask: []
    }
  }
  
  
  render(){
    return (
     <div className="App">
       <Header />

      </div>
    );
  }
}

export default App;

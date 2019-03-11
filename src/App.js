import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import Display from './Display/Display.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Kitti',
      country: "Thailand"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        < SearchBar />
        < Display prop = "profafafap"/>
      
      </div>
    );
  }
}

export default App;

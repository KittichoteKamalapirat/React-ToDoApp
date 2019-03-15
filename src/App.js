import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import Display from './Display/Display.js'
import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCU7vW-KTJSchQ8eixEZmXK0gUbXE64TM0",
  authDomain: "react-to-do-list-a8f6d.firebaseapp.com",
  databaseURL: "https://react-to-do-list-a8f6d.firebaseio.com",
  projectId: "react-to-do-list-a8f6d",
  storageBucket: "react-to-do-list-a8f6d.appspot.com",
  messagingSenderId: "673689778313"
};
firebase.initializeApp(config);



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

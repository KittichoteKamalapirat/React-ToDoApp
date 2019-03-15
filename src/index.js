import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCU7vW-KTJSchQ8eixEZmXK0gUbXE64TM0",
    authDomain: "react-to-do-list-a8f6d.firebaseapp.com",
    databaseURL: "https://react-to-do-list-a8f6d.firebaseio.com",
    projectId: "react-to-do-list-a8f6d",
    storageBucket: "react-to-do-list-a8f6d.appspot.com",
    messagingSenderId: "673689778313"
};
firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref('todos');




// const todos = []
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: '',
            todos: [],
            // database: 
        }
        this.handleInput = this.handleInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.check = this.check.bind(this)
    }
    handleInput(e) {
        this.setState({
            todo: e.target.value
        })
    }
    addTask(e) {
        if (e.keyCode === 13) {
            this.setState({
                todos: this.state.todos.concat(this.state.todo)
            })
            e.target.value = ''
            ref.push(this.state.todo)
        }
    }
    check(e) {
        if (e.target.style.textDecoration === "") {
            e.target.style.textDecoration = " line-through"
        } else {
            e.target.style.textDecoration = ""
        }
    }


    render() {

        ref.on('value', gotData, errData)

        function gotData(data) {
            let todos = data.val()
            // console.log(todos)
            let keys = Object.keys(todos)
            // console.log(keys)
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i]
                let todo = todos[key]
                console.log(todo)
            }
        }

        function errData(err) {
            console.log('Error !')
            console.log(err)
        }

        return (
            <div className='container'>
                <h1>To Do List</h1>
                <input value={this.state.term} onKeyDown={this.addTask} onChange={this.handleInput} placeholder="  Add your tasks here"></input>
                <ul>
                    {this.state.todos.map(x => {
                        return (
                            <li>
                                <input type="checkbox" id={x} name={x} value={x} />
                                <label for={x}>{x}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

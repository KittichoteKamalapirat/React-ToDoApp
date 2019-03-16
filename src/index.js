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



// const todos = []
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.app = firebase.initializeApp(config)
        this.ref = this.app.database().ref('todos')
        this.state = {
            todo: '',
            todos: [],
            // database: 
        }
        this.handleInput = this.handleInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.check = this.check.bind(this)
    }

    componentWillMount() {
        const previousNotes = this.state.todos
        console.log('component Will Mount', previousNotes)
        this.ref.on('child_added', snapshot => {
            previousNotes.push(
                snapshot.val()
            )
// this has to be inside the 'on'  why? might have soething to do with childadded?
            this.setState({
                todos: previousNotes
            })
        })
        //this push here is javascript push
     
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
            this.ref.push(this.state.todo)
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
        console.log('log below', this.state.todos)
        // let array = [1,2,3,4]
        return (
            <div className='container'>
                <h1>To Do List</h1>
                <input value={this.state.term} onKeyDown={this.addTask} onChange={this.handleInput} placeholder="  Add your tasks here"></input>
                <ul>
                    {this.state.todos.map(note => {
                        return (
                            <li>
                                <input type="checkbox" id={note} name={note} value={note} />
                                <label for={note}>{note}</label>
                                {console.log(note)}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

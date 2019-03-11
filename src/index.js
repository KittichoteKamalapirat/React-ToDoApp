import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todos = []
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo: '',
            todos: [],
        }
        this.handleInput = this.handleInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.check = this.check.bind(this)
    }
    handleInput(e){
        this.setState({
            todo: e.target.value
        })
    }
    addTask(e){
        if (e.keyCode === 13)
        {this.setState({
            todos: this.state.todos.concat(this.state.todo)  
        })
        e.target.value = ''
    }
    }
    check(e){
        if(e.target.style.textDecoration === ""){
    e.target.style.textDecoration = " line-through"
     } else {
        e.target.style.textDecoration = ""
     }
    }
    render(){
        return (
            <div className='container'>
                <h1>To Do List</h1>
                <input value={this.state.term} onKeyDown={this.addTask} onChange={this.handleInput} placeholder="  Add your tasks here"></input>

                

                <ul>
                <li>
                            <input type="checkbox" id='x'/>
                            <label for='x'>xyz</label>
                        </li>
                    { this.state.todos.map( x => {
                        return (
                        <li>
                            <input type="checkbox" id={x} name={x} value={x}/>
                            <label for={x}>{x}</label>
                        </li>
                        )})}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    render(){
        return (
            <div className = "search-container">
                <h1>To Do List</h1>
                <input placeholder = "Type you errands"/>
                <button>Add to List</button>
            </div>
        )
    }
}
export default SearchBar
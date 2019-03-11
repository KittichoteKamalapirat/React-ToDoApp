import React from 'react';
import './Searchbar.css';
import '../Display/Display.css'

class SearchBar extends React.Component{
    render(){
        return (
            <div className = "search">
                <h1>To Do List</h1>
                <input placeholder = "Type you errands"/>
            </div>
        )
    }
}

ReactDOM.render(<h1>hello</h1>, document.getElementById('root'))
// export default SearchBar
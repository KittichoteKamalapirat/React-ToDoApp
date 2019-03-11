import React from 'react';
import './Display.css'

class Display extends React.Component{
    render(){
        return (
            <div className = "list-container">
                <ul>
                    <li>Laundry</li>
                    <li>Grocery Shopping</li>
                    <li>{this.props.prop}</li>
                </ul>
            </div>
        )
    }
}
export default Display;
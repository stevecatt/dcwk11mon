import React, { Component } from 'react';
import './Curses.css';


export class Orange extends Component {
    render(){
        return ( <div className="container rows-orange">
        <h5>{this.props.comments}</h5>
        <h5>{this.props.likes}</h5>
    </div>)
    }
}

export class Container extends Component {
    render(){
        return (
            <div className="container">
                <h4>{this.props.head}</h4>
            
                <p>{this.props.par}</p>
        
            </div>
        )
    }
}
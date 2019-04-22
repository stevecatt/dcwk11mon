import React, { Component } from 'react';
import './Heading.css';


export class Heading extends Component {
    render(){
        return (<div className = "heading container">
        <h1>{this.props.title}</h1>
        </div>)
    }
}
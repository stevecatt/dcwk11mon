import React, { Component } from 'react';

export class DisplayName extends Component {
    render(){
        return (<h1>{this.props.firstName}- {this.props.lastName}</h1>)
    }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DisplayName} from './DisplayName';
import {Heading} from './Heading';
import {Curses} from './Curses'
import {Orange} from './Orange'
import {Container} from './Orange'

class App extends Component {
  render() {
    return (
     
      <div className="App">
        <header className="App-header">
       
        <Heading title="High on coding"></Heading>
        <Curses></Curses>
        <Container head = "Introduction to swift" par="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.">
        </Container>
        <Orange comments="15 comments" likes="45 likes"></Orange>
        <Container head = "Hello Watchkit" par="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.">
        </Container>
        <Orange comments="12 comments" likes="124 likes"></Orange>

        <DisplayName firstName="Steve" lastName="Cattanach"></DisplayName>
        
          <p>
          
          </p>
          
            
        </header>
      </div>
    );
  }
}

export default App;

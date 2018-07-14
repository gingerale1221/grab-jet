import React, { Component } from 'react';
import logo from './logo.svg';
import background from './background.png';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

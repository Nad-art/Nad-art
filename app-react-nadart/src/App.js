import React, { Component } from 'react'
import Home from './components/SplashScreen.js'
import 'reset-css'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App

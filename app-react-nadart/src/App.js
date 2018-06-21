import React, { Component } from 'react'
import Connexion from './components/Connexion.js'
import Community from './components/Community.js'
import Challenge from './components/Challenge.js'
import Home from './components/Home.js'
import Tabbar from './components/Tabbar.js'
import { Router, Link } from '@reach/router'
import 'reset-css'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Connexion path='/connexion' />
          <Community path='community' />
          <Challenge path='challenge' />
          <Home path='/' />
        </Router>
       

        
      </div>
    );
  }
}

export default App

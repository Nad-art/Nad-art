import React, { Component } from 'react'
import Connexion from './components/Connexion.js'
import Community from './components/Community.js'
import Challenge from './components/Challenge.js'
import Parcours from './components/Parcours.js'

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
          <Home path='/home' />
          <Community path='/community' />
          <Challenge path='/challenge' />
          <Connexion path='/' />
          <Parcours path='/parcours' />
        </Router>
       

        
      </div>
    );
  }
}

export default App

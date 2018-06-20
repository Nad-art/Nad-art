import React, { Component } from 'react'
import Home from './components/Home-1.js'
import Communaute from './components/Communaute.js'
import 'reset-css'
import './style/App.css'
import { Router, Link } from '@reach/router'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Home path='/' />
          <Communaute path='communaute' />
        </Router>

        <nav>
          <Link to='/' > Accueil </Link>||{" "} 
          <Link to='communaute'> Communauté</Link>
        </nav>
      </div>
    );
  }
}

export default App

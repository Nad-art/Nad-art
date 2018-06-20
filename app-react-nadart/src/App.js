import React, { Component } from 'react'
import Connexion from './components/Connexion.js'
import Community from './components/Community.js'
import { Router, Link } from '@reach/router'
import 'reset-css'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Connexion path='/' />
          <Community path='community' />
        </Router>

        {/* <nav>
          <Link to='/' > Accueil </Link>||{" "} 
          <Link to='community'> Communauté</Link>
        </nav> */}
      </div>
    );
  }
}

export default App

import React from 'react'
import Date from './Dates.js'
import Tabbar from './Tabbar.js'
import Anecdote from './Anecdote.js'
import { Link } from '@reach/router'

import '../styles/Home.css'
import '../styles/Tabbar.css'
import nadar from '../images/nadar-home.jpeg'
import camera from '../images/appareil-nadar.png'
import linkParcours from '../images/link-parcours.png'


const Home = () =>
  <div className='container-home'>
    <h1 className='title-home'>L'Exposition NADAR</h1>
    <div className='top-home'>
      <div className='bkg-nadar'>
        <p className='bnf'>à la BNF Paris</p>
        <div className='date-home'><Date /></div>
        <img className='img-nadar' src={nadar} alt='nadar' />
        <img className='camera' src={camera} alt='camera' />
        <div className='selfie-text'>Un selfie chaque jour pour<br />
          avoir votre place à 12€
        </div>
        <hr className='shape' />
        <p className='start-challenge'>Démarrer le challenge</p>
      </div>
      </div>
      <Anecdote />
      <div className='bottom-home'>
        <h2 className='bottom-title'>LES NADARS <br /> PAR LES NADARS</h2>
      </div>
      <div className='parcours-link'>
          {/* <img src={linkParcours} alt="#"/> */}
          <div className='text-parcours'>
            <h1>LE PARCOURS EXPO</h1>
            <p>ACCOMPAGNEZ VOTRE VISITE DE<br/> L'EXPOSITION AVEC CE<br/> PARCOURS DIGITAL</p>
            <Link to="/parcours"> 
              <p className='access'>accéder > </p>
            </Link> 
          </div>
      </div>
    
    <Tabbar />
  </div>




export default Home
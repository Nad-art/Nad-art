import React from 'react'
import Date from './Dates.js'


import '../styles/Home.css'
import nadar from '../images/nadar-home.jpeg'
import camera from '../images/appareil-nadar.png'


const Home = () =>
  <div className='container-home'>
    <h1 className='title-home'>L'Exposition NADAR</h1>
    <div className='top-home'>
      <div className='bkg-nadar'>
        <p className='bnf'>à la BNF Paris</p>
        {/* <Date className='date-home' /> */}
        <img className='img-nadar' src={nadar} alt='nadar'/>
        <img className='camera' src={camera} alt='camera'/>
        <div className='selfie-text'>Un selfie chaque jour pour<br/>
          avoir votre place à 12€
        </div>
        <hr className='shape'/>
        <p className='start-challenge'>Démarrer le challenge</p>
  </div>

      <div className='bottom-home'></div>
    </div>
  </div>




export default Home
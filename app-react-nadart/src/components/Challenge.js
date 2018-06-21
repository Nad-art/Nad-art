import React from 'react'
import '../styles/Challenge.css'
import Tabbar from './Tabbar.js'




const Challenge = () => {
    return (
        <div> 
            <div className='challenge-nadar'>
              <h3 className= 'title'> LE CHALLENGE </h3>
              <div className="button-photo"> Prendre une nouvelle photo </div>
              <p> Plus que <span className='photo-span'> 3 photos </span></p>
              <p>pour debloquer le billet pour la visite à 12€</p>
            </div>
            <div className='selfie-challenge'>
                 les photos du challenge
            </div>

            <div className='extension-photo'>

            </div>
            <Tabbar />
        </div>
    )

}

export default Challenge
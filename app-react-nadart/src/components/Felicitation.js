import React from 'react';
import '../styles/felicitation.css';
import gifFelicitation from '../images/gif-felicitation.gif';
import Tabbar from './Tabbar.js'


const Felicitation = () => {
    return (
        <div>
            <div className="felicitation">
                <img className= "felicitation-gif" src={gifFelicitation} />
                <Tabbar />  
            </div> 
        </div>
    )
}

export default Felicitation
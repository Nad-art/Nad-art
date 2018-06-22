import React from 'react';
import '../styles/felicitation.css';
import gifFelicitation from '../images/gif-felicitation.gif';


const Felicitation = () => {
    return (
        <div className="felicitation">
            <img className= "felicitation-gif" src={gifFelicitation} />
        </div>
    )
}

export default Felicitation
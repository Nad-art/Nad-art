import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from '@reach/router'
import '../styles/ConnexionButtons.css'
import facebook from '../images/facebook.png'
import google from '../images/google.png'

const buttons = {
    general : {
        borderRadius : '0px'
    },
    white: {
        backgroundColor: 'white',
        color: "black",
        marginBottom: "10px",
    },
    black: {
        backgroundColor: "black",
        color: "white",
    }
}

const ConnexionButtons = () => {
    return (
        <div className="buttons-container">
            <Link to="/home"> 
                <Button variant="contained" style={buttons.white}>
                    <img className='facebook' src={facebook} alt="#"/>
                        <span className='fb-text'>Connexion Facebook</span>
                </Button>
                <Button variant="contained" style={buttons.black}>
                <img src={google} alt="#" className='google'/>
                    Connexion Google
                </Button>
            </Link>
        </div>
    )
}

export default ConnexionButtons
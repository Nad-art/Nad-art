import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from '@reach/router'
import '../styles/ConnexionButtons.css'

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
                    Connexion Facebook
                </Button>
                <Button variant="contained" style={buttons.black}>
                    Connexion Google
                </Button>
            </Link>
        </div>
    )
}

export default ConnexionButtons
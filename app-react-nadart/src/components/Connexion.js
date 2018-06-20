import React from 'react'
import MobileStepper from '@material-ui/core/MobileStepper'
import Dates from './Dates.js'
import Slider from './Slider.js'
import '../styles/Connexion.css'


class Connexion extends React.Component {
    state = {
        activeStep: 0
    }
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }))
    }

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }))
    }
    render() {
        const { activeStep } = this.state
        return (
            <div className="connexion flex" >
                <Slider >
                    <Dates />
                </Slider>
            </div>  
        )
    }
}

export default Connexion
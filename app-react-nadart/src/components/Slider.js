import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import "../styles/Slider.css"
import imageNadarPath from '../images/nadar_bg.png'

const tutorialSteps = [
    {
        label: "Jouer avant l'exposition",
        imgPath: imageNadarPath
    },
    {
        label: "Exposition Nadar",
        imgPath: "http://placekitten.com/500/400"
    }
]

class Slider extends React.Component {
    state = {
        activeStep: 0
    }

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1
        }))
    }

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1
        }))
    }

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    }

    render() {
        const { activeStep } = this.state;

        const maxSteps = tutorialSteps.length;

        return (
            <div className="slider">
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                />
                <SwipeableViews
                    className="slider-content"
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map(step => (
                        <img key={step.label} src={step.imgPath} alt={step.label} />
                    ))}
                </SwipeableViews>


            </div>
        )
    }
}

export default Slider

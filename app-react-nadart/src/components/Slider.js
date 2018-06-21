import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import Dates from './Dates.js';
import '../styles/Slider.css';
import imageNadar from '../images/nadar_bg.png';
import imageSarah from '../images/sarah_bernardt.png';

const images = [
    {
        title: 'Exposition Nadar',
        label: 'à la BNF Paris',
        imgPath: imageSarah,
    },
    {
        title: "Jouer avant l'exposition",
        label: 'Prenez-vous en selfie à la manière de Nadar pour remporter des offres',
        imgPath: imageNadar,
    },
];
const theme = {
    mobileStepper: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 'calc(50% - 22px)',
    },
};

class Slider extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { activeStep } = this.state;

        const maxSteps = images.length;

        return (
            <div className="slider">
                <MobileStepper
                    style={theme.mobileStepper}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                />
                <div className="content-slide">
                    {activeStep === 0 ? <Dates /> : null}
                    <h3>{images[activeStep].title}</h3>
                    <span>{images[activeStep].label}</span>
                </div>

                <SwipeableViews
                    className="slider-content"
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {images.map(image => <img src={image.imgPath} />)}
                </SwipeableViews>

            </div>
        );
    }
}

export default Slider;

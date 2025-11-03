import PropTypes from "prop-types";
import "../assets/styles/ProgressBarSteps.scss";
import {useNavigate} from "react-router-dom";

const ProgressBarSteps = ({ currentStep }) => {
    const steps = ["Planes y cobertura", "Resumen"];

    const navigate = useNavigate(); // Initialize useNavigate

    // Handler to navigate to /register
    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="progress-bar-container">
                {steps.map((step, index) => (
                    <div key={index} className="step-col">
                        <div className={`step ${currentStep === index + 1 ? "active" : ""}`}>
                            <div
                                className={`step-number ${
                                    currentStep >= index + 1 ? "completed" : ""
                                }`}
                            >
                                {index + 1}
                            </div>
                            <span
                                className={`step-title ${
                                    currentStep >= index + 1 ? "completed" : ""
                                }`}
                            >
              {step}
            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <img className="image-progressbar" src="/imgs/line.png" alt="Line"/>
                        )}
                    </div>
                ))}
            </div>


            <div className="progress-bar-steps">
                <div className="progress-bar-steps__back">
                    <i className="progress-bar-steps__icon" onClick={handleClick}></i>
                </div>
                <div className="progress-bar-steps__info">
                    <span className="progress-bar-steps__text">PASO {currentStep} DE {steps.length}</span>
                    <div className="progress-bar-steps__bar">
                        <div className="progress-bar-steps__fill"
                             style={{ width: `${(currentStep / steps.length) * 100}%` }}
                        >
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

ProgressBarSteps.propTypes = {
    currentStep: PropTypes.number.isRequired,
};

export default ProgressBarSteps;

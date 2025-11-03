import { useNavigate } from "react-router-dom";
import "../assets/styles/BackButton.scss"
const BackButton = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Handler to navigate to /register
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="back-button-container">
            <button className="back-button" onClick={handleClick}>
                <div className="back-button__icon">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_740_636)">
                            <circle
                                cx="10"
                                cy="10"
                                r="9"
                                stroke="#4F4FFF"
                                strokeWidth="2"
                            ></circle>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7803 6.96967C11.4874 6.67678 11.0126 6.67678 10.7197 6.96967L8.21967 9.46967C7.92678 9.76256 7.92678 10.2374 8.21967 10.5303L10.7197 13.0303C11.0126 13.3232 11.4874 13.3232 11.7803 13.0303C12.0732 12.7374 12.0732 12.2626 11.7803 11.9697L9.81066 10L11.7803 8.03033C12.0732 7.73744 12.0732 7.26256 11.7803 6.96967Z"
                                fill="#4F4FFF"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_740_636">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <span className="back-button__text">Volver</span>
            </button>
        </div>
    );
};

export default BackButton;

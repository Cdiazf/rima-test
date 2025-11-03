import BackButton from "./BackButton.jsx";
import {calculateDiscount, useFormatDollar} from "../helper/Helper.jsx";
import {useEffect, useState} from "react";
import "../assets/styles/Summary.scss"
import ProgressBarSteps from "./ProgressBarSteps.jsx";
import useCurrentStep from "../hooks/useCurrentStep.jsx";

const ContentSummary = () => {
    const [summaryData, setSummaryData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null); // State for selected plan
    const { formatDollar } = useFormatDollar();
    const currentStep = useCurrentStep();


    useEffect(() => {
        // Retrieve data from localStorage
        const formData = JSON.parse(localStorage.getItem("formData"));
        const storedPlan = JSON.parse(localStorage.getItem("selectedPlan")); // Retrieve selected plan

        if (formData) {
            setSummaryData(formData);
            setUserData(JSON.parse(localStorage.getItem("userData"))); // Extract user data
        }

        if (storedPlan) {
            setSelectedPlan(storedPlan); // Set the selected plan in the state
        }
    }, []);

    if (!summaryData || !userData || !selectedPlan) {
        return <p>Cargando...</p>; // Display loading message until data is retrieved
    }

    // Extract form data
    const { documentNumber, cellNumber } = summaryData;
    const discountPrice = calculateDiscount(selectedPlan.price); // Directly calling the utility function


    return (
        <div className="main">
            <div className=".insurance-summary ">

                {currentStep !== null && (
                    <ProgressBarSteps currentStep={currentStep} />
                )}
        < div className="insurance__content">
            <BackButton/>



            <div className="insurance-summary">
                <h2 className="insurance-summary__title">Resumen del seguro</h2>

                <div className="insurance-summary__card">
                    <div className="insurance-summary__section">
                        <span className="insurance-summary__label">Precios calculados para:</span>
                        <div className="insurance-summary__person">
                            <img src="/imgs/icon-person.png" alt="Icon" className="insurance-summary__icon"/>
                            <span
                                className="insurance-summary__name">{userData?.name || "Nombre no disponible"} {userData?.lastName || "Apellido no disponible"}</span>
                        </div>
                    </div>
                    <hr className="summary-separator"/>
                    <div className="insurance-summary__section">
                        <span className="insurance-summary__subtitle">Responsable de pago</span>
                        <p className="insurance-summary__detail">DNI: {documentNumber}</p>
                        <p className="insurance-summary__detail">Celular: {cellNumber}</p>
                    </div>

                    <div className="insurance-summary__section">
                        <span className="insurance-summary__subtitle">Plan elegido</span>
                        <p className="insurance-summary__detail">{selectedPlan.name}</p>
                        <p className="insurance-summary__detail">Costo del Plan: {formatDollar(discountPrice)} al
                            mes</p>
                    </div>
                </div>
            </div>

        </div>
            </div>
        </div>
    );
};

export default ContentSummary;
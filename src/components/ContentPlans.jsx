import TitlePlan from "./TitlePlan.jsx";
import PersonContainer from "./PersonContainer.jsx";
import BackButton from "./BackButton.jsx";
import ProgressBarSteps from "./ProgressBarSteps.jsx";
import useCurrentStep from "../hooks/useCurrentStep.jsx";
import CardPlans from "./CardPlans.jsx";
import {useState} from "react";

const ContentPlans = ()=>{
    const currentStep = useCurrentStep();

    const [selectedPlan, setSelectedPlan] = useState(null);
    const handleCheckboxChange = (id) => {
        setSelectedPlan(id);
        console.log(id)
    };

    return (
        <div className="main">
            <div className="page">
                {currentStep !== null && (
                    <ProgressBarSteps currentStep={currentStep} />
                )}
                <BackButton/>

                <div className="content">

                    <div className="container-plan">
                            <TitlePlan/>
                            <PersonContainer onCheckboxChange={handleCheckboxChange}/>
                    </div>
                    {selectedPlan && (
                    <div className="plans">
                        <CardPlans selectedPlan={selectedPlan}/>
                    </div>
                        )}

                    <div className="pagination">
                        <button className="pagination__prev">‹</button>
                        <span className="pagination__text">1 / 3</span>
                        <button className="pagination__next">›</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentPlans;
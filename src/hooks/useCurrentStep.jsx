import { useLocation } from "react-router-dom";

const useCurrentStep = () => {
    const location = useLocation();
    const getCurrentStep = () => {
        if (location.pathname === "/plans") {
            return 1; // Step 1 for /plans
        } else if (location.pathname === "/summary") {
            return 2; // Step 2 for /summary
        }
        return null;
    };
    return getCurrentStep();
};

export default useCurrentStep;

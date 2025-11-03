import {calculateDiscount, useFormatDollar} from "../helper/Helper.jsx";
import {useFetchPlans} from "../hooks/useFetchPlans.jsx";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const images = [
    "/imgs/GlLaptopSolid.png",
    "/imgs/GlMedicalAttentionSolid.png",
    "/imgs/GlHospitalSolid.png"

    // Add more images as needed
];
const CardPlans = ({ selectedPlan }) => {

// Helper function to get a random unique set of images
    const getRandomImages = (items, count) => {
        const shuffled = [...items].sort(() => 0.5 - Math.random()); // Shuffle images
        return shuffled.slice(0, count); // Return only `count` number of images
    };

    // Get 3 random images for the 3 list items
    const randomImages = getRandomImages(images, 3);




    const { formatDollar } = useFormatDollar();
    const { plans, loading, error } = useFetchPlans();
    const navigate = useNavigate();

    const storedData = JSON.parse(localStorage.getItem("formData"));
    const storedAge = storedData?.age || 0;

    const handleSelectPlan = (plan) => {

        localStorage.setItem("selectedPlan", JSON.stringify(plan));
        alert(`Has seleccionado el plan: ${plan.name}`);
        navigate("/summary");
    };

    if (loading) return <p>Cargando planes...</p>;
    if (error) return <p>Hubo un error al cargar los planes. Intenta de nuevo más tarde.</p>;


    const filteredPlans = plans
        .filter(plan => plan.age > storedAge)
        .slice(0, 3);
    return (
        <>
            {filteredPlans.map((plan, index) => {
                const discountPrice = calculateDiscount(plan.price);

                return (
            <div className="card-plan" key={index}>
                <div className="card-plan__header">
                    <div className="card-plan__title-container">
                        <h2 className="card-plan__title">{plan.name}</h2>
                        <h3 className="card-plan__sub-title">Costo de plan</h3>
                        {selectedPlan === "owner_2" ? (
                            <p className="card-plan__sub-price">
                                {formatDollar(plan.price)} antes
                            </p>
                        ) : (
                            <p> </p>
                        )}

                        <p className="card-plan__sub-disc-price">
                            {selectedPlan === "owner_2" ? (
                                <> {formatDollar(discountPrice)} al mes </>
                            ) : (
                                <> {formatDollar(plan.price)} al mes </>
                            )}
                        </p>
                    </div>
                    <div className="card-plan__image-container">
                        <img
                            src={plan.imageUrl || "/imgs/IcHomeLight.png"}
                            alt="Plan Image"
                            className="card-plan__image"
                        /></div>
                </div>
                <hr className="card-plan__separator"/>
                <div className="card-plan__content">

                    <ul className="card-plan__description">
                        {randomImages.map((imgSrc, index) => {
                            // Only render the li if there's a corresponding description
                            if (plan.description[index]) {
                                return (
                                    <li key={index} className="card-plan__description-item">
                                        <img
                                            src={imgSrc}
                                            alt={`Random Icon ${index + 1}`}
                                            className="description-icon"
                                        />

                                        <p>
                                            {plan.description[index]}
                                        </p>
                                    </li>
                                );
                            }
                            return null; // Skip rendering if no description exists
                        })}
                    </ul>


                </div>
                <div className="card-plan__footer">
                    <button
                        className="card-plan__button"
                        onClick={() => handleSelectPlan(plan)}
                    >
                        Seleccionar Plan
                    </button>
                </div>

            </div>)
            })}
        </>
    );
};

CardPlans.propTypes = {
    selectedPlan: PropTypes.string.isRequired,
};

export default CardPlans;
import { useState } from "react";
import RegisterFormButton from "./RegisterFormButton";
import RegisterFormCheck from "./RegisterFormCheck";
import RegisterFormLabels from "./RegisterFormLabels";
import {validateFormData} from "../utils/validateFormData.jsx";
import {useNavigate} from "react-router-dom";
import useFetchUserData from "../hooks/useFetchUserData.jsx";
import ErrorText from "./ErrorText.jsx";

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        dniType: "dni",
        documentNumber: "",
        phone: "",
        privacyAccepted: false,
        communicationsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const userData = useFetchUserData();
    console.log(userData)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
        console.log(formData); // Log formData after state update
    };
    const submitFormData = () => {
        setLoading(true);
        const { dniType, documentNumber, phone, privacyAccepted, communicationsAccepted } = formData;

        const minAge = 20;
        const maxAge = 100;
        const randomAge = Math.floor(Math.random() * ((maxAge - minAge) / 4 + 1)) * 4 + minAge;


        const combinedData = {
            documentType: dniType,
            documentNumber,
            cellNumber: phone,
            privacyAccepted,
            communicationsAccepted,
            age: randomAge,
        };

        localStorage.setItem("formData", JSON.stringify(combinedData));
        localStorage.setItem("userData", JSON.stringify(userData));

        setTimeout(() => {
            setLoading(false);
            navigate("/plans");
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateFormData(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            submitFormData();
        }
    };



  return (
    <form className="form"  onSubmit={handleSubmit}>
      <RegisterFormLabels  formData={formData}  handleChange={handleChange} errors={errors} />

      <RegisterFormCheck formData={formData} handleChange={handleChange}  errors={errors} />

      <a href="#" className="form__link">
        Aplican Términos y Condiciones.
      </a>
      <RegisterFormButton loading={loading} />
        {errors.general && <ErrorText error={errors.general} />}
    </form>
  );
};

export default RegisterForm;

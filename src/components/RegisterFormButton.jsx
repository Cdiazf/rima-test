import PropTypes from "prop-types";

const RegisterFormButton = ({loading = false}) => {
  return (
    <button type="submit" className="form__submit" disabled={loading}>
       {loading? "Cargando..." : "Cotiza aquí"}
    </button>
  );
};

RegisterFormButton.propTypes = {
  loading: PropTypes.bool,
};

export default RegisterFormButton;

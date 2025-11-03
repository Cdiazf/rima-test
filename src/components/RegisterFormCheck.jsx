import PropTypes from "prop-types";

const RegisterFormCheck = ({formData, handleChange, errors}) => {
  return (
    <>
      <div className="form__checkbox">
        <input
          type="checkbox"
          id="privacy"
          name="privacyAccepted"
          className="checkbox-input"
          checked={formData.privacyAccepted  }
          onChange={handleChange}
        />
        <label htmlFor="privacy" className="checkbox-input-text">
          Acepto la Política de Privacidad
        </label>

      </div>
        {errors.privacyAccepted && <p className="error-text">{errors.privacyAccepted}</p>}

        <div className="form__checkbox">
        <input
          type="checkbox"
          id="comunications"
          name="communicationsAccepted"
          className="checkbox-input"
          checked={formData.communicationsAccepted }
          onChange={handleChange}
        />
        <label htmlFor="communications" className="checkbox-input-text">
          Acepto la Política Comunicaciones Comerciales
        </label>
      </div>
        {errors.communicationsAccepted && <p className="error-text">{errors.communicationsAccepted}</p>}
    </>
  );
};

RegisterFormCheck.propTypes = {
    formData: PropTypes.shape({
        privacyAccepted: PropTypes.bool,
        communicationsAccepted: PropTypes.bool,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        privacyAccepted: PropTypes.string,
        communicationsAccepted:PropTypes.string
    }),
};

export default RegisterFormCheck;

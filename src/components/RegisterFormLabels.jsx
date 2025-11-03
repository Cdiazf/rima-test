import PropTypes from "prop-types";

const RegisterFormLabels = ({ formData, handleChange, errors }) => {
  return (
    <>
      <div className="form__group">
        <select id="dni"
                name="dniType"
                className="form-select"
                onChange={handleChange}
                value={formData.dniType}
        >
          <option value="dni">DNI</option>
          <option value="ci">CI</option>
        </select>
        <input
          type="text"
          id="dni"
          name="documentNumber"
          placeholder="Nro. de documento"
          className="form-label-id form__input"
           value={formData.documentNumber }
          onChange={handleChange}
        />
      </div>
        {errors?.documentNumber && <p className="error-text">{errors?.documentNumber}</p>}
      <div className="form__group">
        <input
          type="text"
          id="celular"
          name="phone"
          className="form-lable-phone form__input"
          placeholder="Celular"
           value={formData.phone}
          onChange={handleChange}
        />
      </div>
        {errors?.phone && <p className="error-text">{errors?.phone}</p>}

    </>
  );
};

RegisterFormLabels.propTypes = {

    formData: PropTypes.shape({
        dniType: PropTypes.string.isRequired,
        documentNumber: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        documentNumber: PropTypes.string,
        phone: PropTypes.string,
    }),
};

export default RegisterFormLabels;

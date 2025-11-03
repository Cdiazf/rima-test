import PropTypes from "prop-types";

const ErrorText = ({ error }) => error && <p className="error-text">{error}</p>;

ErrorText.propTypes ={
    error : PropTypes.string.isRequired
}

export default ErrorText;

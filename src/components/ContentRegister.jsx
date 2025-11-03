import RegisterForm from "./RegisterForm";
import RegisterImage from "./RegisterImage";
import RegisterTitle from "./RegisterTitle";

const ContentRegister = () => {

  return (
    <div className="main">
      <RegisterImage />
      <hr className="mobile-line" />
      <div className="main__info">
        <RegisterTitle />

        <div className="form-container">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default ContentRegister;

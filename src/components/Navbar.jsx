
const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <img src="/imgs/Logo.png" alt="Rimac Logo" className="header__logo" />
          <div className="header-phone__container">
              <div className="header-phone__text"> ¡Compra por este medio!</div>
              <div className="header-phone__container-number">
                  <img src="/imgs/phone.png" alt="phone"  className="header-phone__logo"/>
                  <p className="header__phone">(01) 411 6001</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;

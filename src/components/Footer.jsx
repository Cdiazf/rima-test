const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <img
          srcSet="/imgs/rimac_black.png 430w, /imgs/rimac-footer-mobile.png 1360w"
          sizes="(max-width: 430px) 135px, 85px"
          alt="Rimac Footer"
          className="footer__img"
        />
        <hr className="footer-mobile-line" />
        <p className="footer__title">© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </div>
  );
};

export default Footer;

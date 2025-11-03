import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import "./layout.scss";
import Footer from "../components/Footer";

const Layout = () => {
    const location = useLocation();

    return (
        <>

    <div className="container">
        { location.pathname === "/" &&
            <>
                <div className="background-image"></div>
                <div className="background-image-right"></div>
            </>
        }
      <Navbar />
      <Outlet />
      <Footer />
    </div>
        </>
  );
};

export default Layout;

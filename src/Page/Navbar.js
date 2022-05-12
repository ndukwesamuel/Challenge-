import { Link } from "react-router-dom";
import Footer_img from "../images/one-funnel-away_logo_funnel.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid  ">
        <div>
          <Link to="/">
            <img className="img-fluid nav_img" src={Footer_img} alt="" />
          </Link>
        </div>

        <div className="nav_Sec2 container-fluid">
          <a href="#img_join" className="nav_link">
            Join
          </a>
          <Link to="/Resgistration" className="nav_link">
            Resgistration
          </Link>
          <Link className="nav_link"> Affiliates </Link>

          <Link className="nav_link"> Successes </Link>
          <Link className="nav_link"> Support </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

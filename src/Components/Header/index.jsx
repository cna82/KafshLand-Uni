// Header component
// imports

import { Link, NavLink } from "react-router-dom";
import "./index.css";
// React Component
const Header = ({ basket }) => {
  // variables and contexts
  return (
    <>
      <nav className=" container-fluid navbar navbar-expand-lg bg-light fixed-top p-2">
        <div className="container-fluid">
          <img
            src="./Images/Icons/nike.png"
            alt="nike icon could be shown"
            style={{
              width: "5rem",
            }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ">
              <li className="nav-item">
                <NavLink exact="true" to="/" className="nav-link">
                  کفشلند
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" exact="true" className="nav-link">
                  محصولات
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="aboutus" exact="true" className="nav-link">
                  درباره ما
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contactus" exact="true" className="nav-link">
                  تماس با ما
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/basket" className="basket-route">
                  <span className="badge  text-light bg-secondary  ">
                    <i className="bi bi-basket" />
                    &nbsp;
                    <span className="badge bg-primary ">{basket.length}</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import "./index.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4>کفش لندی شو </h4>
              <p className="text-success">
                با خرید اشتراک کفشلند یک ماه در ازای هر خرید ارسال رایگان داشته
                باش
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>دسترسی سریع</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="./" className="nav-link text-primary ">
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link to="./products" className="nav-link text-primary">
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link to="./aboutus" className="nav-link text-primary">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="contactus" className="nav-link text-primary">
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 d-flex flex-column ">
              <h5>فضای مجازی</h5>
              <a
                href="https://www.facbook.com"
                className="text-decoration-none me-2 fs-5 text-primary  "
              >
                Facebook {""}
                <i className="bi bi-facebook "></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-decoration-none fs-5 text-danger  "
              >
                Instagram {""}
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-decoration-none me-2 fs-5 text-info "
              >
                Twitter {""}
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <hr />
          <p className="mb-0">&copy; تمامی محصولات متعلق به کفشلند میباشند</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;

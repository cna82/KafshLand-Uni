// Customers feddback section
import { Customers } from "../../Js/Customers";
import './index.css'
const CustomersFeedback = () => {
  return (
    <>
      <section className="customer-feedback py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">نظرات برخی ازمشتریان</h2>
          <div className="row">
            {Customers.map((item) => {
              const { image, fullName, title } = item;
              return (
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm text-center">
                    <img
                      src={image}
                      className="card-img-top rounded-circle mx-auto mt-3 cardImg"
                      alt="Customer 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-danger">{fullName}</h5>
                      <p className="card-text text-primary">{title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default CustomersFeedback;

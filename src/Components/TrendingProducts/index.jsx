// trending products section

const TrendingProducts = () => {
  return (
    <>
      <section className="trending-products py-5">
        <div className="container bg-light">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;

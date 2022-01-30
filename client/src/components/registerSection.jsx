import { Link } from "react-router-dom";

// premium signup / regular signup section displayed in home component were passing user in props to check if user is logged and redirect accordingly

const RegisterSection = ({ user }) => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col-12 col-xl-6 col-md-6 col-lg-6 col-sm-6 ">
            <div className="card mb-4 rounded-3 shadow-sm border-secondary bg-dark">
              <div className="card-header py-3 bg-secondary border-secondary">
                <h4 className="my-0 fw-bold text-light">Premium User</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title text-light">
                  $7.77<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 text-light">
                  <li>Free Events !</li>
                  <li>Free Shipping</li>
                  <li>Phone and email support 24/7</li>
                </ul>

                {user && !user?.premium ? (
                  <Link
                    to="/signupPremium"
                    className="w-100 btn btn-lg btn-outline-light"
                  >
                    Get started
                  </Link>
                ) : (
                  <Link
                    to="/events"
                    className="w-100 btn btn-lg btn-outline-light"
                  >
                    Get started
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-md-6 col-lg-6 col-sm-6">
            <div className="card mb-4 rounded-3 shadow-sm border-secondary">
              <div className="card-header py-3 text-white bg-secondary ">
                <h4 className="my-0 fw-normal">Regular User</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $00<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>No events</li>
                  <li>Shipping Costs</li>
                  <li>Priority email support</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-secondary"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;

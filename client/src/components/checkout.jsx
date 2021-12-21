import "../styles/checkout.css";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import userService from "../services/userService";

// Take "addedItems" and "total" data
const Checkout = ({ addedItems, total }) => {
  // a hook that takes the of addedItems and set tge counter from 0 to the item quantity
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let counter = 0;
    addedItems.forEach((item) => {
      counter += item.quantity;
    });
    setCartCount(counter);
  }, [addedItems, cartCount]);
  // Check if user is logged
  const userLogged = userService.isUserLogged();
  const shipping = Math.floor((total * 10) / 200);
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            labore molestias ipsam hic ullam totam voluptatum tenetur saepe sit
            consectetur. Nam natus, totam facere nobis eveniet qui dolores
            doloremque laborum perferendis pariatur magni molestias porro
            doloribus voluptas! Minus mollitia incidunt suscipit nulla! Porro,
            sapiente nihil ipsam architecto provident repudiandae dignissimos?
          </p>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 col-6 order-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{cartCount}</span>
            </h4>
            <ul className="list-group mb-3">
              {addedItems.map((item) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={item.id}
                  >
                    {item.title}
                    <span className="text-success price">
                      Qty : {item.quantity}&nbsp;= &nbsp;{item.price}$
                    </span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping (USD)</span>
                <strong className="text-danger">
                  {!userLogged?.premium ? (
                    <strong>{shipping}</strong>
                  ) : (
                    <strong>Free</strong>
                  )}
                </strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong className="text-danger">{total}</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 col-6">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value>Choose...</option>
                    <option>Israel</option>
                    <option>United States</option>
                    <option>India</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value>Choose...</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                    <option>zzzz</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder="enter zip code"
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder="enter the name on the card"
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder="credit number"
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder="enter expiration"
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© OSE-Gamaing</p>
        <ul className="list-inline"></ul>
      </footer>
    </div>
  );
};
// map the state and pass it as props
const mapStateToProps = (state) => {
  return {
    // take the "addedItems" from the items object
    addedItems: state.addedItems,
    // take the total from the state
    total: state.total,
  };
};
// Connect component by redux (connect to the store)
const connectBoth = connect(mapStateToProps);
export default connectBoth(Checkout);

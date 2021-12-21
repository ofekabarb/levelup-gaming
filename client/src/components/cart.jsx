import React, { Component } from "react";
import { connect } from "react-redux";
import {
  subtractFromCart,
  removeItemFromCart,
} from "../redux/cart/cartActions";
import { Link } from "react-router-dom";
import cartImage from "../images/cart.jpg";
import userService from "../services/userService";
import "../styles/cart.css";
class Cart extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // Update the user data into the state when the component runs
    this.setState({ user: userService.isUserLogged() });
  }

  handleSubtract = (id) => {
    // Subtract Item Quantity by ID
    this.props.subtractFromCart(id);
  };

  handleRemove = (id) => {
    // Remove Item by ID
    this.props.removeItemFromCart(id);
  };

  render() {
    // Taking the user data after update by "componentDidMount" from the state
    const { user } = this.state;
    // Take the items and them total prices from the props
    const { items, total } = this.props;
    // Creating the shipping cost
    const shipping = Math.floor((total * 10) / 200);
    // If the cart is empty
    if (items.length === 0) {
      return (
        <div className="container min-vh-100 d-flex justify-content-center  ">
          <img
            src={cartImage}
            alt="shopping cart"
            className="align-self-center "
            // style={{ width: "10em", height: "10em" }}
          />
          <h1 className="align-self-center"> Your Cart Is Empty</h1>
        </div>
      );
    }
    // Else (if cart quantity bigger then 1)
    return (
      <div className="">
        <table className="table table-hove ">
          <thead>
            <tr className="">
              <th className="cart-table-header">Product</th>
              <th className="cart-table-header">Quantity</th>
              <th className="text-center cart-table-header">Price</th>
              <th className="text-center cart-table-header"> Item Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="col-sm-8 col-md-6 ">
                    <div className="media d-flex ">
                      <div className="thumbnail  cart-td-img">
                        <img
                          className="media-object prod-img"
                          alt={item.title}
                          src={item.img}
                        />
                      </div>
                      <div className="media-body ms-5">
                        <h4 className="media-heading ">
                          <span className="media-heading-title">
                            {item.title}
                          </span>
                        </h4>
                        <h5 className="media-heading brand">
                          by{" "}
                          <Link to={`/store/${item.brand}`}>{item.brand}</Link>
                        </h5>
                      </div>
                    </div>
                  </td>
                  <td className="col-sm-1 col-md-1 ">
                    <strong className="ms-4 cart-data">{item.quantity}</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong className="cart-data">$ {item.price}</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong className="cart-data">
                      $ {item.quantity * item.price}
                    </strong>
                  </td>
                  <td className="btn-wrapper ">
                    <button
                      className="btn btn-danger remove-btn m-1 ms-5"
                      onClick={() => this.handleRemove(item.id)}
                    >
                      <span className="cart-data">Remove</span>
                    </button>
                    <button
                      className="btn btn-success subtratct-btn m-1 ms-5"
                      onClick={() => this.handleSubtract(item.id)}
                    >
                      <span className="cart-data">subtract</span>
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
                <h5 className="cart-shipping ">Estimated shipping</h5>
              </td>
              <td className="text-right cart-checkout">
                <h5>
                  {!user?.premium ? (
                    <strong className="cart-checkout"> {shipping}$</strong>
                  ) : (
                    <strong className="cart-checkout">Free</strong>
                  )}
                </h5>
              </td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
                <h3 className="cart-total">Total</h3>
              </td>
              <td className="text-right cart-checkout">
                <h3>
                  {!user?.premium ? (
                    <strong className="cart-checkout">
                      {total + shipping}$
                    </strong>
                  ) : (
                    <strong className="cart-checkout">$ {total}</strong>
                  )}
                </h3>
              </td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
                <button
                  type="button"
                  className="btn btn-default cart-btn"
                ></button>
              </td>
              <td>
                <Link to="/checkout" className="btn btn-success">
                  <span className="cart-data">Checkout</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// map the state and pass it as props
const mapStateToProps = (state) => {
  return {
    // take the "addedItems" from the items object
    items: state.addedItems,
    // take the total from the state
    total: state.total,
  };
};
// map the dispatchs to props
const mapDispatchToProps = (dispatch) => {
  return {
    // tke the subtract dispatch (by item id) and set it to props (subtractFromCart)
    subtractFromCart: (id) => dispatch(subtractFromCart(id)),
    //  // tke the remove dispatch (by item id) and set it to props (removeItemFromCart)
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
  };
};

// Connect Cart component by redux (connect to the store)
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

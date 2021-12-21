import "../styles/store.css";
import Product from "./common/product";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSideNav from "./storeSideNav";

class Store extends React.Component {
  //Reducer Function that takes items by ID and add it as a props by click event
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  // filter item from the items object by his "brand"
  filtered = this.props.items.filter((item) => item.brand === "store");
  render() {
    return (
      <>
        <div className="text-center">
          <div className="d-flex">
            <StoreSideNav />

            {/* Side nav (Playstation, Nintendo, PC, Xbox) */}
            {/* MAIN CONTENT */}
            <div className="container store-container">
              <SRLWrapper>
                <div className="row justify-content-around">
                  <div
                    className="display-2 mt-2 text-center main-title text-dark"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000"
                  >
                    Store
                  </div>
                  {/* Mapping the items from the items object by his "brand" */}

                  {this.filtered.map((item) => {
                    return (
                      // Product will take the data from the mapping and insert it into the Product pattern with props

                      <Product
                        key={item.id}
                        item={item}
                        addToCart={() => this.handleClick(item.id)}
                      />
                    );
                  })}
                </div>
              </SRLWrapper>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

const connectBoth = connect(mapStateToProps, mapDispatchToProps);

export default connectBoth(Store);

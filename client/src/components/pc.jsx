import "../styles/store.css";

import { connect } from "react-redux";
import Product from "./common/product";
import { addToCart } from "../redux/cart/cartActions";
import { SRLWrapper } from "simple-react-lightbox";
import StoreSideNav from "./storeSideNav";
const Pc = ({ items, addToCart }) => {
  const handleClick = (id) => {
    addToCart(id);
  };
  // display only items thats pc brand
  let filtered = items.filter((item) => item.brand === "pc");
  return (
    <>
      <div className="d-flex">
        <StoreSideNav />
        <div className="container ">
          <SRLWrapper>
            <div className="row  justify-content-around">
              <div
                className="display-2 mt-2 text-center main-title text-dark"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                Pc
              </div>
              {filtered.map((item) => {
                return (
                  <Product
                    key={item.id}
                    item={item}
                    addToCart={() => handleClick(item.id)}
                  />
                );
              })}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </>
  );
};

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
const converter = connect(mapStateToProps, mapDispatchToProps);

export default converter(Pc);

import "../styles/store.css";
import StoreSideNav from "./storeSideNav";
import { connect } from "react-redux";
import Product from "./common/product";
import { addToCart } from "../redux/cart/cartActions";
import { SRLWrapper } from "simple-react-lightbox";
const Nintendo = ({ items, addToCart }) => {
  const handleClick = (id) => {
    addToCart(id);
  };
  // display only items thats nintendo brand
  let filtered = items.filter((item) => item.brand === "nintendo");
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
                Nintendo
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

export default converter(Nintendo);

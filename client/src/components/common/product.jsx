import React, { useState } from "react";
import StoreModel from "../storeModal";
import { SRLWrapper } from "simple-react-lightbox";
import "../../styles/product.css";
const Product = ({
  item: { title, price, desc, id, img, details },
  addToCart,
}) => {
  //
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  // a function that runs on click INFO on product button
  const showModal = (img, title, desc) => {
    let currentData = [img, title, desc];
    // sets the "currentData"to tempData to pass to storeModal
    setTempData((item) => [1, ...currentData]);
    // when the "setModal" in the state changes true  - the popup shows
    return setModal(true);
  };

  // Function to close the product popup
  const hideModal = () => {
    setTempData([]);
    // when the "setModal" in the state changes back to FALSE  - the popup will hide
    return setModal(false);
  };

  return (
    <>
      <div
        className="card col-md-3 mt-5 col-lg-3 col-xl-3 col-12 m-3 text-center border border-dark shadow-lg p-3 bg-body rounded prodImg"
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
      >
        <SRLWrapper>
          <img src={img} className="card-img-top" alt="..." />
        </SRLWrapper>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text text-dark mb-1">
            <i className="bi bi-tags  me-2 text-dark"></i>
            Price: {price}
            <span>
              <i className="bi bi-currency-dollar text-dark"></i>
            </span>
          </div>

          <div className="card-text amount mb-3">{desc}</div>

          <button
            className="btn btn-primary me-2"
            onClick={() => showModal(img, title, details)}
          >
            More Info <i className="bi bi-info text-light ms-1"></i>
          </button>

          <button
            className="btn btn-success ms-2"
            onClick={() => addToCart(id)}
          >
            Add to cart <i className=" bi bi-cart text-light ms-1"></i>
          </button>
        </div>
      </div>
      {/* The Popup that shows if the modal set to TRUE */}
      {modal === true ? (
        <StoreModel
          img={tempData[1]}
          title={tempData[2]}
          details={tempData[3]}
          hideModal={hideModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Product;

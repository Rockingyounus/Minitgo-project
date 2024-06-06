// Import the css, for the scroll bar

import { useContext } from "react";
import myContext from "./context/MyContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  showSnackbar,
  hideSnackbar,
} from "./redux/Slices/CartSlice";

export default function Carousel() {
  const dispatch = useDispatch();
  const context = useContext(myContext);
  const { products, snackbarOpen } = context;

  const handleAddToCart = (product, index) => {
    dispatch(addToCart(product));
    dispatch(showSnackbar({ message: "Product added successfully!", index }));

    // Wait for 1 second, then hide snackbar
    setTimeout(() => {
      dispatch(hideSnackbar());
    }, 1000);
  };
  const cart = useSelector((state) => state.cart);
  console.log("cart products", products)
  return (
    <div>
      <div className="container ">
        <div className="text-left">
          <h3 className=" ">Trending Section</h3>
          <span className=" text-muted p-2" style={{ fontSize: 13.5 }}>
            Nearst trending products
          </span>
          <div className="rounded-full"></div>
        </div>

        <div className="d-flex gap-3 overflow-x-scroll my-3  px-4 scroll-smooth ">
          {products.map((prod, index) => (
            // code started by Ganesh
            //paddding 4px
            <div
              key={index}
              className="prod p-4 shadow rounded bg-light my-4"
            >
              {/* end code by Ganesh  */}
              <a
                href={`/${prod.product_id}`}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                className=" text-black"
              >
                {/* code started by ganesh */}
                <div
                  key={index}
                  className="d-flex flex-column mb-2 "
                  style={{ height: "540px" }}
                >
                  {/* {/* code end by ganesh * */}
                  {/* code started by ganesh  */}
                  <div style={{ width: "100%", height: "55%" }}>
                    <img
                      className="w-100 rounded h-100"
                      src={prod.product_image1}
                      alt={`Image ${prod.product_id}`}
                    />
                  </div>
                  {/* code end by ganesh */}
                  <div className=" p-2">


                    {/* new code pooja */}
                    <div className="row">
                      <h1 className="fs-4">{prod.product_name}</h1>
                      <p>{prod.category}</p>
                      <p className="line-clamp-2">{prod.product_discription}</p>
                      <div className="d-flex justify-content-between flex-wrap">
                        <p>Price: {prod.product_price}</p>
                        <p>Material: {prod.material}</p>

                      </div>

                      <div className="d-flex justify-content-between flex-wrap">

                        <p>Color: {prod.product_color1}</p>
                        <p>Size: {prod.product_size}</p>
                      </div>

                    </div>
                    {cart.snackbar.open && cart.snackbar.index === index && (
                      <div
                        style={{ fontSize: "12px" }}
                        className="border text-center rounded w-75 mx-auto"
                      >
                        {cart.snackbar.message}
                      </div>
                    )}
                  </div>
                </div>
              </a>
              <div className="d-flex justify-content-center align-items-center fs-4 mt-auto my-2 mb-3 ">
                <button
                  className="btn  btn-dark w-100 "
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => handleAddToCart(prod, index)}
                >
                  {" "}
                  Add To Cart
                </button>
                <div className="d-flex ">
                  <button className="btn btn-dark w-100 mx-2 px-5 ">
                    <Link
                      to="/checkout"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Buy
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


{/* <div className="d-flex flex-column">
                      <h1 className="fs-3">{prod.product_name}</h1>
                      <p className="line-clamp-2">{prod.product_discription}</p>
                      <p className="font-bold" style={{ fontWeight: "700" }}>
                        {prod.product_size}
                      </p>
                    </div> */}
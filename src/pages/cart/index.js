import {addToCart,clearCart,decreaseCart,getTotals,removeFromCart} from "@/redux/stateSlices/CartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Order from "@/Components/Order/Order";
const index = () => {
  const carts = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setCart(carts?.cartItems);
    setCartSubTotal(carts.cartTotalAmount);
    dispatch(getTotals());
 
  }, [carts]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    if (product.cartQuantity < 2) {
      return;
    }
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //order place
  const cartQuantitys = [];
  const productsId = [];
  cart.map((item, index) => {
    return [cartQuantitys.push(item.cartQuantity), productsId.push(item._id)];
  });
  const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);

  const hanldeChange = (e) => {
    console.log("e", e);
  };

  console.log("cart", cart);
  return (
    <>
      <div className="marTop"></div>
      <section className="check-out">
        <Container>
          <Row className="justify-content-md-center">
            {/* left */}
            <Col lg={12}>
              <h2>Shopping cart ({cart.length} Items)</h2>

              <div className="table">
                {cart.length < 1 ? (
                  <h2 className="text-center mt-3 text-warning">Your Cart is empty</h2>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart &&
                        cart.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className="d_flex">
                                  <div className="img">
                                    <img
                                      src={item?.product_image}
                                      alt={item.name}
                                    />
                                  </div>
                                  <p>{item.name}</p>
                                </div>
                              </td>

                              <td>
                                <h4>
                                  {item.discount}.00 <i class="flaticon-taka"></i>
                                </h4>
                              </td>

                              <td>
                                <div className="Cart d_flex">
                                  <div className="custom-input">
                                    <div
                                      className="decrement"
                                      onClick={() => handleDecreaseCart(item)}
                                    >
                                      <i class="flaticon-minus-sign"></i>
                                    </div>

                                    <input
                                      type="text"
                                      placeholder="1"
                                      value={item.cartQuantity}
                                    />

                                    <div
                                      className="increment"
                                      onClick={() => handleAddToCart(item)}
                                    >
                                      <i class="flaticon-plus"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <h3>
                                  {item.discount  * item.cartQuantity}.00 <i class="flaticon-taka"></i>
                                </h3>
                              </td>

                              <td>
                                <div
                                  className="close"
                                  onClick={() => handleRemoveFromCart(item)}
                                >
                                  <i class="flaticon-close-1"></i>
                                </div>
                              </td>
                            </tr>
                          );
                        })}

                    </tbody>

                  </table>
                )}


              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <Order totalItem={totalItem} productsId={productsId } cartSubTotal={cartSubTotal} cart={cart} cartQuantitys={cartQuantitys}></Order>
    </>
  );
};

export default index;

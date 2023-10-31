import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";
// Css
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { clearCart } from "@/redux/stateSlices/CartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Order = ({ totalItem, cartSubTotal, cart, cartQuantitys, productsId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmitOrder = (data) => {
    const postBody = {
      name: data.customerName,
      phoneNumber: data.customerMobile,
      address: data.customerAddress,
      productId: productsId,
      quantity: cartQuantitys,
      shipping_cost: 250,
      totall_price: cartSubTotal,
    };
    axios.post(`${process.env.API_URL}/order/create-order`, postBody)
      .then((res) => {
        // if (res.status === 200) {
          console.log("res theme one check out", res);
          router.push(`/thankyou/${res?.data?.data?._id}`);
          handleClearCart();
        // }
      })
      .catch((err) => {
        console.log(err);
        swal("Something went wrong !", "error");
      });
  };


  return (
    <>
      <section className={style.OrderConfirmFrom}>
        <form onSubmit={handleSubmit(handleSubmitOrder)}>
          <Container>
            <Row>
              {/* left */}
              <Col lg={7}>

                <div className={style.OrderConfirmLeft}>
                  <h3>Billing details</h3>

                  <div className={style.CustomeInput}>
                    <input type="text" name="" placeholder="আপনার নাম লিখুন *" {...register("customerName", { required: true })} />
                    {errors.customerName && (
                      <span style={{ color: "red" }}>
                        Name is required
                      </span>
                    )}
                  </div>

                  <div className={style.CustomeInput}>
                    <input
                      {...register(
                        "customerMobile",
                        { },
                       
                      )}
                      type="text"
                  
                      placeholder="আপনার মোবাইল নাম্বার লিখুন *"
                    />
                    {errors.customerMobile && (
                      <span style={{ color: "red" }}>
                        Valid Mobile Number require
                      </span>
                    )}
                  </div>

                  <div className={style.CustomeInput}>
                    <input
                      type="text"
                      name=""
                      placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                      {...register("customerAddress", { required: true })}
                    />
                    {errors.customerAddress && (
                      <span style={{ color: "red" }}>
                        Address is required
                      </span>
                    )}
                  </div>
                </div>

              </Col>

              {/* right */}

              <Col lg={5}>
                <div className={style.OrderConfirmRight}>
                  <h3>Your order</h3>

                  <ul>
                    <li>
                      <h4>Product</h4>
                      <h5>Subtotal</h5>
                    </li>


                    {
                      cart && cart.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className={`${style.left} ${style.d_flex}`}>
                              <div className={style.img}>
                                <img src={item?.product_image} alt={item?.name} />
                              </div>

                              <p>{item?.name}</p>
                            </div>

                            <div className={`${style.right} ${style.d_flex}`}>
                              <h5> ৳ {item?.discount}</h5>
                            </div>
                          </li>
                        )
                      })
                    }



                    <li>
                      <h5>Shipping</h5>

                      <h5>
                        <div className={`${style.checkbox} ${style.d_flex}`}>
                          <input type="radio" id="Inside" name="checkbox" />
                          <label htmlFor="Inside">Inside Dhaka : ৳ 80.00</label>
                        </div>
                        <div className={`${style.checkbox} ${style.d_flex}`}>
                          <input type="radio" id="Outside" name="checkbox" />
                          <label htmlFor="Outside">Outside Dhaka: ৳ 120.00</label>
                        </div>
                      </h5>
                    </li>
                    <li>
                      <h4>Total Item</h4>
                      <h4>{totalItem}</h4>
                    </li>

                    <li>
                      <h4>Total</h4>
                      <h4>{cartSubTotal}.00</h4>
                    </li>
                  </ul>

                  <button className="bg" type="submit">
                    <RiShoppingCart2Line /> Place Order BDT {cart?.length < 1 ? 0 : (cartSubTotal)}.00
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default Order;

{
  /*
  <form onSubmit={handleSubmit(handleSubmitOrder)}>
      <div className="customer-address">
        <h3>Shipping Address</h3>

        <div className="custom-input">
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Name is required</span>
          )}
        </div>

        <div className="custom-input">
          <input
            type="text"
            placeholder="Enter mobile number"
            {...register(
              "phoneNumber",
              { required: true },
              { min: 11, max: 15 }
            )}
          />
          {errors.phoneNumber && (
            <span style={{ color: "red" }}>
              Phone Number is required
            </span>
          )}
        </div>

        <div className="custom-input">
          <input
            type="text"
            placeholder="Enter address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span style={{ color: "red" }}>Address is required</span>
          )}
        </div>

        <button type="submit">
          Place Order <span>500.00</span>
          <i class="flaticon-taka"></i>
        </button>
      </div>
    </form> 
    */
}

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { urlLink } from "@/Url/Url";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/stateSlices/CartSlice";

const index = () => {
  const dispatch = useDispatch();
  const [productListInfo, setProductListInfo] = useState([]);
  const handleFetchPrduct = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `${process.env.API_URL}/product/allProducts`,
      });
      setProductListInfo(data?.data?.data);
    } catch (err) {}
  };

  useEffect(() => {
    handleFetchPrduct();
  }, []);

  console.log("product", productListInfo);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="marTop"></div>

      <section className="page-new-arrival">
        <div className="other-banner">
          <img src="/images/others-page-bg.jpg" alt="" />

          <div className="header text-center">
            <h2>New Arrival</h2>
          </div>
        </div>

        <Container>
          <Row>
            {productListInfo.map(
              (item, key) =>
                key < 20 && (
                  <Col lg={3}>
                    <div className="new-arrival-item">
                      <div className="img">
                        <img src={item?.product_image} alt="" />
                        <div className="overlay">
                          <Link
                            className="quick-buy"
                            href={`/product-details/${item._id}`}
                          >
                            Quick Buy
                          </Link>
                        </div>
                      </div>
                      <h4>
                        {" "}
                        <Link href={`/product-details/${item._id}`}>
                          {item.name}
                        </Link>{" "}
                      </h4>
                      <h5>
                        {item.price}.00 <i class="flaticon-taka"></i>
                      </h5>
                    </div>
                  </Col>
                )
            )}
          </Row>
        </Container>
      </section>

      <div className="section-gaps"></div>
    </>
  );
};

export default index;

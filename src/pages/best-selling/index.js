import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/stateSlices/CartSlice";
import Filter from "@/Components/Sheared/Filter";

const sortingOptions = [
  { value: "", label: "--select option--" },
  { value: "feature", label: "Feature" },
  { value: "best-selling", label: "Best Selling" },
  { value: "a-z", label: "Alphabetically, A-Z" },
  { value: "z-a", label: "Alphabetically, Z-A" },
  { value: "low-to-high", label: "Price, low to high" },
  { value: "high-to-low", label: "Price, high to low" },
  { value: "old-to-new", label: "Date, old to new" },
];

const index = ({ productListInfo }) => {
  const dispatch = useDispatch();
  // const [productListInfo, setProductListInfo] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  // const handleFetchPrduct = async () => {
  //   try {
  //     let data = await axios({
  //       method: "get",
  //       url: `${process.env.API_URL}/product/allProducts`,
  //     });
  //     setProductListInfo(data?.data?.data);
  //   } catch (err) {}
  // };

  const handleFetchProductFilter = useCallback(async () => {
    try {
      let data = await axios({
        method: "get",
        url: `${process.env.API_URL}/product/product-filter/${selectedValue}`,
      });
      setProductListInfo(data?.data?.data);
    } catch (err) {}
  }, [selectedValue]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  // useEffect(() => {
  //   handleFetchPrduct();
  // }, []);

  useEffect(() => {
    handleFetchProductFilter();
  }, [handleFetchProductFilter]);
  return (
    <>
      <div className="marTop"></div>

      <section className="page-new-arrival">
        <div className="other-banner">
          <img src="/images/others-page-bg.jpg" alt="" />

          <div className="header text-center">
            <h2>Best Selling</h2>
            <button className="bg">
              <Link href="">Learn More</Link>
            </button>
          </div>
        </div>

        <Container>
          <Row>
            <Col lg={12}>
              <Filter
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                sortingOptions={sortingOptions}
              />
            </Col>

            {productListInfo?.map(
              (item, key) =>
                key < 20 && (
                  <Col lg={3} sm={4}>
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
                        <Link href={`/product-details/${item._id}`}>
                          {item.name}
                        </Link>
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
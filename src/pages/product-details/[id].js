import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import axios from "axios";

// Image Slider
import ImageSlider from "@/Components/imageSlider/ImageSlider";
import Link from "next/link";
import { urlLink } from "@/Url/Url";
import { useRouter } from "next/router";
import { addToCart } from "@/redux/stateSlices/CartSlice";
import { useDispatch } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [productDetalisInfo, setProductDetalisInfo] = useState([]);
  const [dataDetailsInfo, setDataDetalisInfo] = useState([]);
  const [productListInfo, setProductListInfo] = useState([]);

  const handleFetchPrductDetails = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `${process.env.API_URL}/product/details/${id}`,
      });
      setProductDetalisInfo(data?.data?.data[0]);
      setDataDetalisInfo(data?.data?.data);
    } catch (err) {}
  };

  useEffect(() => {
    handleFetchPrductDetails();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
  }, [id]);

  console.log("productDetalisInfo", productDetalisInfo);
  return (
    <>
      <div className="marTop"></div>

      <section className="page-product-details">
        <Container>
          <Row>
            {/* img */}
            <Col lg={6}>
              <div className="product-img-slider">
                <ImageSlider data={dataDetailsInfo}></ImageSlider>
              </div>
            </Col>

            <Col lg={6}>
              <div className="product-description">
                <h6>IN STOCK </h6>

                <h2>{productDetalisInfo?.name}</h2>

                <div className="star">
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                </div>

                <h3>
                  {productDetalisInfo.discount}Tk{" "}
                  <del>{productDetalisInfo.price}Tk</del>
                </h3>
                <p>{productDetalisInfo?.description}</p>

                {/* cart */}
                <div className="Cart d_flex">
                  <button onClick={() => handleAddToCart(productDetalisInfo)}>
                    <i class="flaticon-checkout"></i> Add to Cart
                  </button>

                  {/* <div className="custom-input">
                                        <div className="decrement"><i class="flaticon-minus-sign"></i></div>
                                        <input type="text" placeholder="1" />
                                        <div className="increment"><i class="flaticon-plus"></i></div>
                                    </div> */}
                </div>

                {/* color */}
                <div className="color">
                  <h4>Color</h4>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          {/* product-tabs */}
          <div className="product-tabs">
            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description">
                <div className="tab-description">
                  <p>{productDetalisInfo?.description}</p>
                </div>
              </Tab>

              <Tab eventKey="additional" title="Additional Information">
                <div className="tab-description">
                  <p>{productDetalisInfo?.description}</p>

                  {/* <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et.</li>
                                        <li>Lorem ipsum dolor sit amet, Ea, et.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, et.</li>
                                    </ul> */}

                  {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p> */}
                </div>
              </Tab>

              <Tab eventKey="review" title="Rating & Reviews">
                <div className="tab-description review">
                  <h3>Start Reting</h3>
                  <div className="RivewRating">
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="related-blog">
            <Row>
              <Col lg={12}>
                <h3>Realted Post</h3>
                <h4>
                  View our all services & details of our digital solutions
                </h4>
              </Col>

              {productListInfo.map(
                (item, key) =>
                  key < 4 && (
                    <Col lg={3}>
                      <div className="new-arrival-item">
                        <div className="img">
                          <img src={item?.product_image} alt="" />
                          <div className="overlay">
                            <Link
                              className="quick-buy"
                              onClick={() => handleAddToCart(item)}
                              href="#"
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
          </div>
        </Container>
      </section>

      <div className="section-gaps"></div>
    </>
  );
};

export default index;

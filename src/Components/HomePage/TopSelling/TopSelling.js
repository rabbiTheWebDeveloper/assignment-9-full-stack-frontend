import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import axios from "axios";

// Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { urlLink } from "@/Url/Url";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/stateSlices/CartSlice";

const TopSelling = ({productListInfo}) => {
  const dispatch = useDispatch();
  // const [productListInfo, setProductListInfo] = useState([]);
  // const handleFetchPrduct = async () => {
  //   try {
  //     let data = await axios({
  //       method: "get",
  //       url: `${process.env.API_URL}/product/allProducts`,
  //     });
  //     setProductListInfo(data?.data?.data);
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   handleFetchPrduct();
  // }, []);

  // console.log("product", productListInfo);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section className="new-arrival" data-aos="flip-up">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header">
                <h2>Best Selling Product</h2>
                <Link href="/best-selling"> View All </Link>
              </div>
            </Col>
          </Row>
        </Container>

        {/* new-arrival-slider */}
        <div className="new-arrival-slider">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="topSellingSwiper"
          >
            {productListInfo.map(
              (item, key) =>
                key < 10 && (
                  <SwiperSlide>
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
                        <Link href={`/product-details/${item._id}`}>{item.name}</Link>{" "}
                      </h4>
                      <h5>
                        {item.price}.00 <i class="flaticon-taka"></i>
                      </h5>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        
      </section>
    </>
  );
};

export default TopSelling;

import React, { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import moment from "moment/moment";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);
  const handleFetchBlogList = async () => {
    try {
      let data = await axios({
        method: "get",
        url: `${process.env.API_URL}/allBlog`,
      });
      setBlogList(data?.data?.data);
    } catch (err) {}
  };

  useEffect(() => {
    handleFetchBlogList();
  }, []);

  return (
    <>
      <section className="blog">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header text-center">
                <h2>Our Blog</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, ipsa!
                </p>
                <a href="/blog">View All</a>
              </div>
            </Col>
          </Row>
        </Container>

        <Col lg={12}>
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
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
            {blogList &&
              blogList.map((item, key) => (
                <SwiperSlide>
                  <div className="blog-item" key={key}>
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="text">
                      <h5>
                        <span>Date:</span>
                        {moment(item?.createdAt).format("LL")}{" "}
                      </h5>

                      <h3>
                        <Link href={`/blog-details/${item._id}`}>
                          {item?.blog_name}
                        </Link>
                      </h3>
                      <p>
                     
                        <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                        </p>

                      <Link href={`/blog-details/${item._id}`}> Read More</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Col>
      </section>
    </>
  );
};

export default Blog;

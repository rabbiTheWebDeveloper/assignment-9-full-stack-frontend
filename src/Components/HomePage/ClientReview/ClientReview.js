import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import axios from 'axios';

// Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Banner from '@/Components/HomePage/Banner/Banner';
import { urlLink } from '@/Url/Url';
import AOS from "aos";
import "aos/dist/aos.css";

const ClientReview = ({clientReviewList}) => {

    // const [clientReviewList, setClientReviewList] = useState([]);
    // const handleFetchClientReview = async () => {
    //     try {
    //         let data = await axios({
    //             method: "get",
    //             url: `${process.env.API_URL}/review/all-reviews`
    //         });
    //         setClientReviewList(data?.data?.data);
    //     } catch (err) {

    //     }
    // };

    // useEffect(() => {
    //     handleFetchClientReview();
    // }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (

        <>

            <section className='client-review' data-aos="fade-up">

                <Container>

                    <Row className="justify-content-md-center">

                        <Col lg={10}>

                            <Swiper
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="clientReviewSwiper"
                            >

                                {
                                   clientReviewList && clientReviewList.map((item, key) => (

                                        key < 5 &&

                                        <SwiperSlide>

                                            <div key={key} className="client-review-item">

                                                {/* left */}
                                                <div className="left">

                                                    <h5>1000's of 5 Star Reviews</h5>

                                                    <div className="star">
                                                        <i class="flaticon-star"></i>
                                                        <i class="flaticon-star"></i>
                                                        <i class="flaticon-star"></i>
                                                        <i class="flaticon-star"></i>
                                                        <i class="flaticon-star"></i>
                                                    </div>

                                                    <p>{item?.description}</p>

                                                    <h4>--{item?.review_name}</h4>

                                                </div>

                                                <div className="right">
                                                    <img src={item.image} alt={item.review_name} />
                                                </div>

                                            </div>

                                        </SwiperSlide>

                                    ))
                                }

                            </Swiper>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>

    )
}

export default ClientReview
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const index = () => {


    return (

        <>
            <div className="marTop"></div>
            <section className='page-our-community page-new-arrival'>

                <div className="other-banner">

                    <img src="/images/others-page-bg.jpg" alt="" />

                    <div className="header text-center">
                        <h2>About Us</h2>
                    </div>

                </div>

                <Container>

                    <Row className="justify-content-md-center">

                        <Col lg={8}>

                            <div className="about">

                                <h3>What is FewHue?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum reprehenderit consequatur architecto omnis quidem perspiciatis sed. Ut architecto doloribus sunt, optio eum fugiat neque corrupti ducimus voluptates quaerat inventore, tempore veniam! Sapiente earum tenetur neque, exercitationem, doloribus voluptatum sit architecto aliquam nulla, dolore veniam iure. Perspiciatis quo, officiis voluptatem, incidunt iure pariatur fuga laboriosam quos voluptate provident libero mollitia dicta reiciendis. Ut suscipit nisi asperiores libero ad provident vero quidem quos perferendis molestias. Similique illo quisquam omnis perferendis rem reprehenderit fugiat ipsa ipsum sed sunt ad aliquam, voluptas error qui! Facilis iusto architecto eum repellendus ut, ratione reprehenderit perspiciatis.</p>

                            </div>

                        </Col>

                    </Row>

                    {/* our-history */}
                    <div className="our-history">

                        <Row className='d_flex'>

                            <Col lg={6} sm={6}>

                                <div className="our-history-img">
                                    <img src="/images/history.jpg" alt="" />
                                </div>

                            </Col>

                            <Col lg={6} sm={6}>

                                <div className="our-history-text">
                                    <h3>Our History</h3>
                                    <p>Established in 2016 by friends, Charlie Hender and Will Swale, ortc Clothing Co. was founded on an admiration of classic, quality design, and a vision to create timeless, ever lasting lifestyle pieces. The brand’s flagship store is located in Norwood, South Australia, with their iconic designs sold online globally.</p>
                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* our-history */}
                    <div className="our-history">

                        <Row className='d_flex'>

                            <Col lg={6} sm={6}>

                                <div className="our-history-text">
                                    <h3>Our Store</h3>
                                    <p>Established in 2016 by friends, Charlie Hender and Will Swale, ortc Clothing Co. was founded on an admiration of classic, quality design, and a vision to create timeless, ever lasting lifestyle pieces. The brand’s flagship store is located in Norwood, South Australia, with their iconic designs sold online globally.</p>
                                </div>

                            </Col>

                            <Col lg={6} sm={6}>

                                <div className="our-history-img">
                                    <img src="/images/store-2.png" alt="" />
                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* our-mission */}
                    <div className="our-history">

                        <Row className='d_flex'>

                            <Col lg={6} sm={6}>

                                <div className="our-history-img">
                                    <img src="/images/mission.jpg" alt="" />
                                </div>

                            </Col>

                            <Col lg={6} sm={6}>

                                <div className="our-history-text">
                                    <h3>Our Mission</h3>
                                    <p>Established in 2016 by friends, Charlie Hender and Will Swale, ortc Clothing Co. was founded on an admiration of classic, quality design, and a vision to create timeless, ever lasting lifestyle pieces. The brand’s flagship store is located in Norwood, South Australia, with their iconic designs sold online globally.</p>
                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* our-vision */}
                    <div className="our-history">

                        <Row className='d_flex'>

                            <Col lg={6} sm={6}>

                                <div className="our-history-text">
                                    <h3>Our Vision</h3>
                                    <p>Established in 2016 by friends, Charlie Hender and Will Swale, ortc Clothing Co. was founded on an admiration of classic, quality design, and a vision to create timeless, ever lasting lifestyle pieces. The brand’s flagship store is located in Norwood, South Australia, with their iconic designs sold online globally.</p>
                                </div>

                            </Col>

                            <Col lg={6} sm={6}>

                                <div className="our-history-img">
                                    <img src="/images/vision.jpg" alt="" />
                                </div>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>

            <div className="section-gaps"></div>

        </>

    )
}

export default index
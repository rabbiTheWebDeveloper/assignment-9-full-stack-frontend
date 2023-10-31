import Blog from '@/Components/Blog/Blog';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const index = () => {
    const router = useRouter()
    const { id } = router.query
    const [blogDetalisInfo, setBlogDetalisInfo] = useState({});

    const handleFetchPrductDetails = async () => {
        try {
            let data = await axios({
                method: "get",
                url: `${process.env.API_URL}/blogDetails/${id}`
            });
            setBlogDetalisInfo(data?.data?.data[0]);
        } catch (err) {

        }
    };

    useEffect(() => {
        handleFetchPrductDetails();
    }, [id]);


    console.log(blogDetalisInfo)

    return (

        <>
            <div className="marTop"></div>
            <section className='page-blog-details page-new-arrival'>

                <div className="other-banner">

                    <img src="/images/others-page-bg.jpg" alt="" />

                    <div className="header text-center">
                        <h2>Blog Details</h2>
                    </div>

                </div>

                <Container>

                    <Row>

                        <Col lg={10}>

                            <div className="blog-details">

                                <h2>{blogDetalisInfo?.blog_name}</h2>

                                <h5><span>Date:</span> {moment(blogDetalisInfo?.createdAt).format('LL')} </h5>

                                <img src={blogDetalisInfo?.image} alt={blogDetalisInfo?.blog_name} />

                                <p>
                                <div dangerouslySetInnerHTML={{ __html: blogDetalisInfo?.description }} />
                                    
                                    {/* {blogDetalisInfo?.description} */}
                                    
                                    </p>

                              

                              

                            </div>

                        </Col>

                    </Row>

                    <div className="related-blog">

                        <Row>

                            <Col lg={12}>
                                <h3>Realted Post</h3>
                                <h4>View our all services & details of our digital solutions</h4>
                            </Col>

                            <Blog />

                        </Row>

                    </div>

                </Container>

            </section>

            <div className="section-gaps"></div>

        </>
    )

}

export default index
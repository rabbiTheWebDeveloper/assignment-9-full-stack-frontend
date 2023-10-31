import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { urlLink } from '@/Url/Url';
import Order from '@/Components/Order/Order';
import moment from 'moment';
import Filter from '@/Components/Sheared/Filter';
const sortingOptions = [
    { value: '', label: '--select option--' },
    { value: 'news', label: 'News' },
    { value: 'article', label: 'Article' },
    { value: 'events', label: 'Events' },
  ];
const index = ({blogList}) => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleFetchBlogFilter =useCallback (async () => {
        try {
            let data = await axios({
                method: "get",
                url: `${process.env.API_URL}/searchBlog/${selectedValue}`
            });
            setBlogList(data?.data?.data);
        } catch (err) {

        }
    },[selectedValue]);
    useEffect(() => {
        handleFetchBlogFilter();
    }, [handleFetchBlogFilter]);
    return (

        <>
            <div className="marTop"></div>

            <section className='page-new-arrival'>

                <div className="other-banner">

                    <img src="/images/others-page-bg.jpg" alt="" />

                    <div className="header text-center">
                        <h2>Blog</h2>
                    </div>

                </div>

                <Container>

                    <Row>
                        <Col lg={12}>
                        <Filter selectedValue={selectedValue} setSelectedValue={setSelectedValue} sortingOptions={sortingOptions}/>
                        </Col>

                        {
                            blogList.length > 0 ?
                                blogList && blogList.map((item, key) => (



                                    <Col lg={3} sm={6}>

                                        <div className="blog-item">

                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>

                                            <div className="text">

                                                <h5><span>Date:</span>{moment(item?.createdAt).format('LL')} </h5>
                                                    <Link className='blog_title' href={item?.blog_title ? item?.blog_title :"#" }>
                                                    <h3>{item?.blog_name}</h3>
                                                    </Link>
                                               
                                                <p>{item?.description}</p>

                                                <Link href={`/blog-details/${item._id}`}  > Read More</Link>

                                            </div>

                                        </div>
                                    </Col>



                                ))
                                :
                                <>
                                    <Col lg={3}>
                                        <div
                                            className="blog-item"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            <div
                                                className="img"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    backgroundColor: '#e8e8e8',
                                                }}
                                            >
                                                <img src="" alt="" />
                                            </div>

                                            <div className="text">
                                                <h5 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}>
                                                    <span style={{ display: 'inline-block', width: '60px', height: '10px', backgroundColor: '#e8e8e8', marginBottom: '10px' }}></span>
                                                </h5>

                                                <h3 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></h3>

                                                <p style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></p>

                                                <Link
                                                    href=''
                                                    style={{ display: 'inline-block', width: '80px', height: '20px', backgroundColor: '#e8e8e8' }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={3}>
                                        <div
                                            className="blog-item"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            <div
                                                className="img"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    backgroundColor: '#e8e8e8',
                                                }}
                                            >
                                                <img src="" alt="" />
                                            </div>

                                            <div className="text">
                                                <h5 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}>
                                                    <span style={{ display: 'inline-block', width: '60px', height: '10px', backgroundColor: '#e8e8e8', marginBottom: '10px' }}></span>
                                                </h5>

                                                <h3 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></h3>

                                                <p style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></p>

                                                <Link
                                                    href=''
                                                    style={{ display: 'inline-block', width: '80px', height: '20px', backgroundColor: '#e8e8e8' }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={3}>
                                        <div
                                            className="blog-item"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            <div
                                                className="img"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    backgroundColor: '#e8e8e8',
                                                }}
                                            >
                                                <img src="" alt="" />
                                            </div>

                                            <div className="text">
                                                <h5 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}>
                                                    <span style={{ display: 'inline-block', width: '60px', height: '10px', backgroundColor: '#e8e8e8', marginBottom: '10px' }}></span>
                                                </h5>

                                                <h3 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></h3>

                                                <p style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></p>

                                                <Link
                                                    href=''
                                                    style={{ display: 'inline-block', width: '80px', height: '20px', backgroundColor: '#e8e8e8' }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={3}>
                                        <div
                                            className="blog-item"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            <div
                                                className="img"
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    backgroundColor: '#e8e8e8',
                                                }}
                                            >
                                                <img src="" alt="" />
                                            </div>

                                            <div className="text">
                                                <h5 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}>
                                                    <span style={{ display: 'inline-block', width: '60px', height: '10px', backgroundColor: '#e8e8e8', marginBottom: '10px' }}></span>
                                                </h5>

                                                <h3 style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></h3>

                                                <p style={{ backgroundColor: '#e8e8e8', height: '20px', marginBottom: '10px' }}></p>

                                                <Link
                                                    href=''
                                                    style={{ display: 'inline-block', width: '80px', height: '20px', backgroundColor: '#e8e8e8' }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>



                                </>



                        }

                    </Row>

                </Container>

            </section >

            <div className="section-gaps"></div>

        </>

    )
}

export default index


export const getStaticProps = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/allBlog`);
      if (!res.ok) {
        throw new Error(`Error fetching data: ${res.status}`);
      }
      const data = await res.json();
      console.log("dsds", data);
  
      return {
        props: {
            blogList: data?.data || [], // Use null if data is undefined
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error.message);
  
      return {
        props: {
            blogList: [], // Handle the error by setting productListInfo to null
        },
        revalidate: 10,
      };
    }
  }

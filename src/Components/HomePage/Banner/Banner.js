import React, { useEffect, useState } from 'react';
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


const Banner = ({bannerInfo}) => {
    // const [bannerInfo, setBannerInfo] = useState([]);
    // const handleFetchBanner = async () => {
    //     try {
    //         let data = await axios({
    //             method: "get",
    //             url: `${process.env.API_URL}/allBanner`
    //         });
    //         setBannerInfo(data?.data?.data);
    //     } catch (err) {


    //     }
    // };

    // useEffect(() => {
    //     handleFetchBanner();
    // }, []);

    // console.log("banner ", bannerInfo)

console.log("banner ", bannerInfo)
    return (
        <>

            {/* ---------------------------------------------------------------------------------------------------------------------- 
        Banner
      ----------------------------------------------------------------------------------------------------------------------*/}
            <section className='banner'>

                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="bannerSwiper"
                >

                    {

                        bannerInfo && bannerInfo.map((item, key) => (

                            key < 5 && (
                                <SwiperSlide>

                                    <div key={key} className="banner-item">

                                        <img src={item?.image} alt="" />

                                        <div className="banner-content">

                                            <Container>

                                                <Row className="justify-content-md-center">

                                                    <Col lg={8}>

                                                        <div className="banner-text">

                                                            <h1>{item.header}</h1>
                                                            <h3>{item.subheader} Best Seller Restlock</h3>
                                                            <button className='bg'>Shop Now</button>

                                                        </div>

                                                    </Col>

                                                </Row>

                                            </Container>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            )

                        ))

                    }

                </Swiper>

            </section>

        </>

    )

}

export default Banner


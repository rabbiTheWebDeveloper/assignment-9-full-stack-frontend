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

import Banner from "@/Components/HomePage/Banner/Banner";
import NewArrival from "@/Components/HomePage/NewArrival/NewArrival";
import TopSelling from "@/Components/HomePage/TopSelling/TopSelling";
import ClientReview from "@/Components/HomePage/ClientReview/ClientReview";
import Blog from "@/Components/Blog/Blog";
import SecondBanner from "@/Components/HomePage/Banner/SecondBanner";
import ThirdBanner from "@/Components/HomePage/Banner/ThirdBanner";
import FourthBanner from "@/Components/HomePage/Banner/FourthBanner";
import Newsletter from "@/Components/HomePage/Newsletter/Newsletter";

export default function Home({bannerInfo ,clientReviewList ,productListInfo}) {
  return (
    <>
      <div className="marTop"></div>
      {/* ---------------------------------------------------------------------------------------------------------------------- 
        Banner
      ----------------------------------------------------------------------------------------------------------------------*/}
      <Banner bannerInfo={bannerInfo} />

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        marquee
      ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="marquee">
        <ul>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Free Returns & Exchanges</Link>{" "}
          </li>
        </ul>
      </section>

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        new-arrival
      ----------------------------------------------------------------------------------------------------------------------*/}
      <NewArrival productListInfo={productListInfo} />

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        SecondBanner
      ----------------------------------------------------------------------------------------------------------------------*/}
      <SecondBanner />

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        top-selling
      ----------------------------------------------------------------------------------------------------------------------*/}
      <TopSelling productListInfo={productListInfo} />

      <div className="section-gaps"></div>
      {/* ---------------------------------------------------------------------------------------------------------------------- 
        ThirdBanner
      ----------------------------------------------------------------------------------------------------------------------*/}
      <ThirdBanner />

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        client-review
      ----------------------------------------------------------------------------------------------------------------------*/}
      <ClientReview clientReviewList={clientReviewList} />

      <div className="section-gaps"></div>

      <div className="section-gaps"></div>
      {/* ---------------------------------------------------------------------------------------------------------------------- 
        FourthBanner
      ----------------------------------------------------------------------------------------------------------------------*/}
      <FourthBanner />

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        blog
      ----------------------------------------------------------------------------------------------------------------------*/}
      <Blog />

      <div className="section-gaps"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        our-store
      ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="our-store">
        {/* left */}
        <div className="left">
          <h3>Our Store</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            quisquam veniam nam porro quod sit.
          </p>

          <ul>
            <li>Mon: 10am-5pm</li>
            <li>Thus: 10am-5pm</li>
            <li>Wed: 10am-5pm</li>
            <li>Thurs: 10am-5pm</li>
            <li>Fri: 10am-5pm</li>
            <li>Sat: 10am-5pm</li>
            <li>Sun: 10am-5pm</li>
          </ul>

          <Link href="">
            <i class="flaticon-location"></i> Direction
          </Link>
        </div>

        {/* middle */}
        <div className="middle">
          <img src="/images/store-1.png" alt="" />
        </div>

        {/* right */}
        <div className="right">
          <img src="/images/store-2.png" alt="" />
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------------------------------------------- 
        Newsletter
      ----------------------------------------------------------------------------------------------------------------------*/}
      <Newsletter />
    </>
  );
}


export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/allBanner`);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    const data = await res.json();
    console.log("dsds", data);

    const productRes = await fetch(`${process.env.API_URL}/product/allProducts`);
    if (!productRes.ok) {
      throw new Error(`Error fetching product data: ${productRes.status}`);
    }
    const productData = await productRes.json();
    // console.log("Product data:", productData);

    const reviewRes = await fetch(`${process.env.API_URL}/review/all-reviews`);
    if (!reviewRes.ok) {
      throw new Error(`Error fetching product data: ${reviewRes.status}`);
    }
    const reviewData = await reviewRes.json();

    return {
      props: {
          bannerInfo: data?.data || [], // Use null if data is undefined
          productListInfo: productData?.data || [], // Use null if data is undefined
          clientReviewList: reviewData?.data || [], // Use null if data is undefined
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
          bannerInfo: [], 
          clientReviewList: [],
          productListInfo: [], //// Handle the error by setting productListInfo to null
      },
      revalidate: 10,
    };
  }
}
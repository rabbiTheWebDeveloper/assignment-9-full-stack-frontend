import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

const index = () => {
  const [mes, setMes] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${process.env.API_URL}/contact/contact-us`, data)
      .then(function (response) {
        console.log("response contaract us ", response);
        setMes("Form Submit Successfully");
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="marTop"></div>
      <section className="contact-us page-new-arrival">
        <div className="other-banner">
          <img src="/images/others-page-bg.jpg" alt="" />

          <div className="header text-center">
            <h2>Contact Us</h2>
          </div>
        </div>

        <Container>
          <div className="contact-us-form">
            <Row className="d_flex">
              <Col lg={6}>
                <div className="contact-us-img">
                  <img src="/images/contact-us.svg" alt="" />
                </div>
              </Col>

              <Col lg={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="custom-input">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>

                  <div className="custom-input">
                    <label>Mobile</label>
                    <input
                      type="text"
                      placeholder="Enter your mobile"
                      {...register("mobile")}
                    />
                    {errors.mobile && <span>This field is required</span>}
                  </div>

                  <div className="custom-input">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>

                  <div className="custom-input">
                    <label>Message</label>
                    <textarea
                      name=""
                      rows="5"
                      placeholder="Message"
                      {...register("message")}
                    ></textarea>
                    {errors.message && <span>This field is required</span>}
                  </div>

                  <div className="custom-input">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      placeholder="Enter your zipcode"
                      {...register("zipcode")}
                    />
                    {errors.zipcode && <span>This field is required</span>}
                  </div>

                  <div className="custom-input">
                    <button className="bg" type="submit">
                      Submit
                    </button>
                  </div>

                  <p>{mes}</p>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <div className="section-gaps"></div>
    </>
  );
};

export default index;

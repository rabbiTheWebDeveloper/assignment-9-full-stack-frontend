import React from "react";

import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className={styles.delivery}>
        <Container>
          <Row>
            {/* item */}
            <Col lg={3} sm={3} xs={6}>
              <div className={styles.deliveryItem}>
                <div className={styles.img}>
                  <i class="flaticon-express-delivery"></i>
                </div>
                <h3>Fasted Delivery</h3>
              </div>
            </Col>

            {/* item */}
            <Col lg={3} sm={3} xs={6}>
              <div className={styles.deliveryItem}>
                <div className={styles.img}>
                  <i class="flaticon-customer-service"></i>
                </div>
                <h3>Great Support</h3>
              </div>
            </Col>

            {/* item */}
            <Col lg={3} sm={3} xs={6}>
              <div className={styles.deliveryItem}>
                <div className={styles.img}>
                  <i class="flaticon-payment-method"></i>
                </div>
                <h3>Secure Payment</h3>
              </div>
            </Col>

            {/* item */}
            <Col lg={3} sm={3} xs={6}>
              <div className={styles.deliveryItem}>
                <div className={styles.img}>
                  <i class="flaticon-medal"></i>
                </div>
                <h3>Rewords Program</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="section-gaps"></div>

      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg={5} sm={5}>
              <div className={styles.footerLogo}>
                <div className={styles.img}>
                  <img src="/images/logo.svg" alt="" />
                </div>

                <h3>About Us</h3>
                <p>
                  ortc Clothing Co is a lifestyle brand with a simple
                  philosophy: we craft timeless garments that are made to last
                  and transcend generations. Shop our range of premium clothing,
                  gifts and accessories online or in store.
                </p>

                <div className={styles.socialMedia}>
                  <Link href="">
                    <i class="flaticon-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="flaticon-instagram"></i>
                  </Link>
                  <Link href="">
                    <i class="flaticon-youtube"></i>
                  </Link>
                  <Link href="">
                    <i class="flaticon-linkedin"></i>
                  </Link>
                  <Link href="">
                    <i class="flaticon-pinterest-circular-logo-symbol"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={7} sm={7}>
              <Row>
                <Col lg={6} sm={6} xs={6}>
                  <div className={styles.footerItem}>
                    <h3>Company</h3>

                    <ul>
                      <li>
                        <Link href="">About Us</Link>
                      </li>

                      <li>
                        <Link href="/new-arrival">New Arrival</Link>
                      </li>

                      <li>
                        <Link href="/best-selling">Best Seller</Link>
                      </li>

                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={6} sm={6} xs={6}>
                  <div className={styles.footerItem}>
                    <h3>Support</h3>

                    <ul>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>

                      <li>
                        <Link href="/our-community">Our Community</Link>
                      </li>

                      <li>
                        <Link href="">Privacy Policy</Link>
                      </li>

                      <li>
                        <Link href="">Terms and Condition</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={12}>
              <p className={styles.copyRight}>
                Copyright © <Link href="">FewHue</Link> All rights reserved
                Smart Coder BD{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

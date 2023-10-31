import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";

const Menubar = () => {
  const carts = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCart(carts?.cartItems);
  }, [carts]);

  //   mobile Menu
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className={styles.navbar}>
        {/* desktopMenu */}
        <div className={styles.desktopMenu}>
          {/* menubar */}
          <div className={styles.menubar}>
            <ul>
              <li className={router.pathname == "/" ? "active" : ""}>
                <Link href="/">Home</Link>
              </li>

              <li className={router.pathname == "/new-arrival" ? "active" : ""}>
                <Link href="/new-arrival">New Arrival</Link>
              </li>

              <li
                className={router.pathname == "/best-selling" ? "active" : ""}
              >
                <Link href="/best-selling">Best Selling</Link>
              </li>

              <li className={router.pathname == "/blog" ? "active" : ""}>
                <Link href="/blog">Blog</Link>
              </li>

              <li
                className={router.pathname == "/our-community" ? "active" : ""}
              >
                <Link href="/our-community"> About Us</Link>
              </li>

              <li className={router.pathname == "/contact-us" ? "active" : ""}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>

          {/* account */}
          <div className={styles.account}>
            <ul>
              {/* <li>
              <Link href="/login">Account</Link>
            </li> */}

              <li>
                {/* <Link href="/best-selling">Be a Seller</Link> */}
              </li>

              {/* <li>
                  <Link href="">
                    Search <i class="flaticon-search"></i>
                  </Link>
                </li> */}

              <li>
                <Link href="/cart">
                  Cart <i class="flaticon-checkout"></i>
                </Link>
                <span className={styles.order}>{cart.length}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile-menu */}
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuButton} onClick={handleShow}>
            <div className={styles.img}>
              <img src="/images/menu.png" alt="" />
            </div>
            <Link href="" className={styles.search}>
              <i class="flaticon-search"></i>
            </Link>
          </div>

          {/* logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>

          <Link href="/cart" className={styles.cart}>
            {" "}
            <i class="flaticon-checkout"></i>
            <span className={styles.order}>{cart.length}</span>
          </Link>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menubar</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <ul className={styles.MobileNav}>
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>

                <li
                  className={router.pathname == "/new-arrival" ? "active" : ""}
                >
                  <Link href="/new-arrival">New Arrival</Link>
                </li>

                <li
                  className={router.pathname == "/best-selling" ? "active" : ""}
                >
                  <Link href="/best-selling">Best Selling</Link>
                </li>

                <li className={router.pathname == "/blog" ? "active" : ""}>
                  <Link href="/blog">Blog</Link>
                </li>

                <li
                  className={
                    router.pathname == "/our-community" ? "active" : ""
                  }
                >
                  <Link href="/our-community">About Us</Link>
                </li>

                <li
                  className={router.pathname == "/contact-us" ? "active" : ""}
                >
                  <Link href="/contact-us">Contact Us</Link>
                </li>

                <li
                  className={router.pathname == "/contact-us" ? "active" : ""}
                >
                  {/* <Link href="#">Be a seller</Link> */}
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </section>
    </>
  );
};

export default Menubar;

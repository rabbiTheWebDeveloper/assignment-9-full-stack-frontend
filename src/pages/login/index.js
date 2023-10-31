import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';


const login = () => {

    return (

        <>

            <section className={styles.login}>

                <Container>

                    <Row className='d_flex'>

                        <Col lg={6}>

                            <div className={styles.loginImg}>
                                <img src="/images/login.jpg" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className={styles.loginForm}>

                                <form action="">

                                    <div className="">

                                        <h2>Login</h2>

                                        <div className={styles.customInput}>
                                            <label> Email </label>
                                            <input type="text" placeholder='Enter your Email' />
                                        </div>

                                        <div className={styles.customInput}>
                                            <label> Password </label>
                                            <input type="password" placeholder='Enter your Password' />
                                        </div>

                                        <div className={styles.customInput}>
                                            <button className={styles.bg} type='submit'> Login </button>
                                        </div>

                                    </div>

                                </form>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>

    )
}

export default login
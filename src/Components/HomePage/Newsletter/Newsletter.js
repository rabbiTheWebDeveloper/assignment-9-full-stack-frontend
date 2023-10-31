import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Newsletter = () => {
  return (
    
    <>
        <section className='Newsletter'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="Newsletter-Content">
                            <h2>Subscribe</h2>
                            <p>Subscribe our newsletter to stay updated every moment</p>
                            <div className="custom-input">
                                <input type="text" placeholder='Enter a valid email address' />
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>

  )
}

export default Newsletter
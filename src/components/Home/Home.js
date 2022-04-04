import React from 'react'
import { Container } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <section className="hero-section mt-5">
      <Container className="d-flex">
        <div className="hero-text-area text-start align-items-center d-flex">
          <div className="hero-text">
            <h1>
              WH-H810 h.ear on 3 Mini <span>Wireless Headphone</span>
            </h1>
            <button className='hero-btn mt-3'>Shop Now</button>
          </div>
        </div>
        <div className="hero-img-area d-flex align-items-center justify-content-end">
          <img className="hero-img" src="img/sony-headphone.png" alt="" />
        </div>
      </Container>
    </section>
  )
}

export default Home

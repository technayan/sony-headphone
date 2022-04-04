import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useReviews from '../../hooks/useReviews'
import SingleReview from '../SingleReview/SingleReview'
import './Home.css'

const Home = () => {
  const [reviews] = useReviews();

  const homePageReviews = reviews.slice(0, 3);

  let navigate = useNavigate();

  const handleAllReviewsBtn = () => {
    navigate('/reviews');
  }

  return (
    <main>
      <section className="hero-section py-5">
        <Container className="d-flex">
          <div className="hero-text-area text-start align-items-center d-flex">
            <div className="hero-text">
              <h1>
                WH-H810 h.ear on 3 Mini <span>Wireless Headphones</span>
              </h1>
              <p className="hero-sub-title mt-4">
                Enjoy you every Music with best quality sound, noise
                cancellation, and comfort.
              </p>
              <button className="hero-btn mt-3">Shop Now</button>
            </div>
          </div>
          <div className="hero-img-area d-flex align-items-center justify-content-end">
            <img className="hero-img" src="img/sony-headphone.png" alt="" />
          </div>
        </Container>
      </section>

      <section className="customer-reviews-section">
        <Container>
          <h2>Customer Reviews</h2>
          <div className="review-wrapper d-flex justify-content-between mt-5">
            {
                homePageReviews.map((review) => <SingleReview key={review.id} review={review} />
            )}
          </div>

          <button className='reviews-btn mt-5' onClick={handleAllReviewsBtn}>See All Reviews</button>
        </Container>
      </section>
    </main>
  )
}

export default Home

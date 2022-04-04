import React from 'react'
import { Container } from 'react-bootstrap'
import useReviews from '../../hooks/useReviews'
import SingleReview from '../SingleReview/SingleReview'
import './Reviews.css'

const Reviews = () => {
  const [reviews] = useReviews()
  return (
    <section className="py-5">
      <Container>
        <h1>All Reviews</h1>
        <div className="all-reviews-wrapper mt-5">
          {reviews.map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Reviews

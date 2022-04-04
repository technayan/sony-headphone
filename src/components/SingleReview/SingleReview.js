import React from 'react'
import { Card } from 'react-bootstrap'
import './SingleReview.css'

const SingleReview = (props) => {
  const { name, img, review, ratings } = props.review
  return (
    <Card>
      <img className='customer-img mx-auto mt-3' src={img} alt={name} />
      <Card.Body>
        <Card.Text>
          <h4>{name}</h4>
          <p className='review'><span className='quote-sign'>❝ </span>{review}</p>
          <p className='ratings'>Ratings : {ratings}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleReview

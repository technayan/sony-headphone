import React from 'react'
import { Container } from 'react-bootstrap'
import QuizOne from '../QuizOne/QuizOne'
import QuizTwo from '../QuizTwo/QuizTwo'

const Blogs = () => {
  return (
    <div className="my-5">
      <Container>
        <QuizOne></QuizOne>
        <QuizTwo></QuizTwo>
      </Container>
    </div>
  )
}

export default Blogs

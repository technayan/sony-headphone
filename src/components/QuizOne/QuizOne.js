import React from 'react'

const QuizOne = () => {
  return (
    <div
      className="my-3"
      style={{ padding: '30px', background: '#CAE0E0', borderRadius: '10px' }}
    >
      <h3>What is Context API?</h3>
      <p className="mt-3" style={{fontSize: '20px'}}>
        Context API is a way to pass props in every components very easily. We
        can create context and then paren component and other children
        components can access the data of context variable. It works as a global
        variable as we can access it from anywhere. Context API is the
        alternative of props drilling.
      </p>
    </div>
  )
}

export default QuizOne

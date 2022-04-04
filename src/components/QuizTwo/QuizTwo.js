import React from 'react'

const QuizTwo = () => {
  return (
    <div
      className="my-3"
      style={{ padding: '30px', background: '#CAE0E0', borderRadius: '10px' }}
    >
      <h3>What is Semantic Tag?</h3>
      <p className='mt-3' style={{fontSize: '20px'}}>
        Semantic tags are those HTML tags that are easily recognized by humans
        by their names. Like &lt;header&gt;, &lt;footer&gt;, &lt;table&gt;,
        &lt;article&gt; etc. These tags describe their purpose by their names.
        Now a days, many people are using internet and many people are not aware
        of html tags. So, for them html semantic tags were created so that
        peaple can easily understant what is the purpose of the tags. With the
        benifits of semantic tags a non techy person can understand the code.
      </p>
    </div>
  )
}

export default QuizTwo

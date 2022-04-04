import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import useData from '../../hooks/useData'

const AreaChartsComp = () => {
    const [analysis] = useData();
  return (
    <div className='my-5'>
        <h2>Investment vs Revenue</h2>
      <AreaChart width={450} height={300} data={analysis} margin={{ top: 10, right: 0, left: 0, bottom: 0,}}>
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Legend verticalAlign="top" height={36}/>
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
    </div>
  )
}

export default AreaChartsComp

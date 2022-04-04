import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const LineChartComp = () => {
    const [analysis] = useData();
    console.log(analysis);
    return (
        <div className='my-5'>
            <h2>Month wise sell</h2>
            <LineChart width={450} height={300} data={analysis} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend verticalAlign="top" height={36}/>
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default LineChartComp;
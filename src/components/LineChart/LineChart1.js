import { Tooltip } from 'recharts';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const LineChart1 = () => {
    const data  = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='p-2'>
               <div className='m-2'>
                   <h1 className='text-purple-300'>Line Chart</h1>
               </div>
            <LineChart width={550} height={400} data={data}>
               <Line type="monotone" dataKey="investment" stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" />
               <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default LineChart1;
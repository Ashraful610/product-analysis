import React from 'react';
import BarChart from '../BarChart/BarChart';
import LineChart1 from '../LineChart/LineChart1';
import PieChart1 from '../PieChart/PieChart1';


const DashBoard = () => {
    return (
        <div className='m-4'>  
                <div className='w-50 p-8'>
                        <LineChart1></LineChart1>
                </div>
                <div className='w-50'>
                         <BarChart></BarChart>
                </div>
        </div>
    );
};

export default DashBoard;
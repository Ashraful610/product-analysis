import React from 'react';
import BarChart1 from '../BarChart/BarChart1';
import LineChart1 from '../LineChart/LineChart1';



const DashBoard = () => {
    return (
        <div className='m-4 d-flex row gap-24'>  
                <div className='col-lg-5  p-8'>
                        <LineChart1></LineChart1>
                </div>
                <div className='col-lg-5 p-8'>
                            <BarChart1></BarChart1>
                </div>
               
        </div>
    );
};

export default DashBoard;
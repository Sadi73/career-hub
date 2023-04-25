import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NavBar from '../NavBar/NavBar';

const Statistics = () => {
    const marks = [
        {
            Assignment: 1,
            Mark: 57
        },
        {
            Assignment: 2,
            Mark: 49
        },
        {
            Assignment: 3,
            Mark: 43
        },
        {
            Assignment: 4,
            Mark: 55
        },
        {
            Assignment: 5,
            Mark: 60
        },
        {
            Assignment: 6,
            Mark: 52
        },
        {
            Assignment: 7,
            Mark: 58
        },
    ]
    return (
        <div>
            <div className='bg-gray-100 p-10'>
                <NavBar></NavBar>
                <h1 className='text-5xl text-center mt-32'>Statistics</h1>

            </div>

            <div className='w-3/4 mx-auto bg-gray-100 mt-16 p-10'>
                <div className='flex justify-center items-center'>
                    <LineChart width={500} height={300} data={marks}>
                        <Line dataKey="Mark"></Line>
                        <XAxis dataKey="Assignment"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>

                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
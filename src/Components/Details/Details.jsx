import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ShowDetails from '../ShowDetails/ShowDetails';

const Details = () => {
    const data = useLoaderData();
    // console.log(data);

    const jobId = location.href.split('/')[4];
    // console.log(jobId);

    const findJob = data.find(item => item.id === jobId);
    // console.log(findJob);

    return (
        <div>
            <div className='bg-gray-100 p-10'>
                <NavBar></NavBar>
                <h1 className='text-5xl text-center mt-32'>Job Details</h1>
            </div>

            <div className='w-3/4 mx-auto flex justify-between mt-32'>
                <div className='' style={{ width: '880px' }}>
                    <p> <span className='text-xl font-bold'> Description:</span> {findJob.description}</p>
                    <p> <span className='text-xl font-bold'> Responsibility:</span> {findJob.responsibility}</p>
                    <h1 className='text-xl font-bold'>Educational Requirements:</h1>
                    <p>{findJob.requirements}</p>
                    <h1 className='text-xl font-bold'>Experience:</h1>
                    <p>{findJob.experience} in this field</p>
                </div>
                <div>
                    <div className='bg-gray-100 p-5 rounded-md'>
                        <h1 className='text-xl font-bold mb-5'>Job Details</h1>
                        <hr className='mb-5' />
                        <p> <span className='font-bold'>Salary:</span> {findJob.salary} </p>
                        <p> <span className='font-bold'>Title:</span> {findJob.title} </p>
                        <p> <span className='font-bold'>Company: </span> {findJob.company} </p>
                        <h1 className='text-xl font-bold my-3'>Contact Information</h1>
                        <hr />
                        <p> <span className='font-bold'>Phone:</span> 01XXXXXXXXXX </p>
                        <p> <span className='font-bold'>Email:</span> info@hotmail.com</p>
                        <p> <span className='font-bold'>Address</span> Dhaka Bangladesh</p>
                    </div>
                    <button className='bg-sky-300 w-full p-3 mt-2 text-white hover:bg-sky-500 rounded-md'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default Details;
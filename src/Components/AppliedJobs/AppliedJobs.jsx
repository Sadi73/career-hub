import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const jobsApplied = [];
    const jobFromLocalStorage = localStorage.getItem('cart');
    const jobs = JSON.parse(jobFromLocalStorage);

    for (const id in jobs) {
        const q = allJobs.find(jb => jb.id === id);
        jobsApplied.push(q);
    }
    console.log(jobsApplied);
    return (
        <div>
            <div className='bg-gray-100 py-16'>
                <NavBar></NavBar>
                <h1 className='text-5xl font-medium text-center mt-32'>Applied Jobs </h1>
            </div>
            <div className='mt-32 w-3/4 mx-auto'>
                {
                       jobsApplied.map(job => <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>) 
                    // jobsApplied.map(job => <li key={job.id}>Applied jObs</li>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
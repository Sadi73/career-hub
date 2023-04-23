// import React from 'react';

const Job = ({job}) => {
    // console.log(job);
    return (
        <div className="bg-gray-200 p-5 rounded-md">
            <img src={job.logo} alt="" />
            <h1 className="text-xl font-bold">{job.title}</h1>
            <p>{job.availability} Job Available</p>
            
        </div>
    );
};

export default Job;
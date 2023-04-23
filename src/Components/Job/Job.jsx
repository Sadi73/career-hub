// import React from 'react';

const Job = ({job}) => {
    const {logo,title,availability} = job;
    // console.log(job);
    return (
        <div className="bg-gray-200 p-5 rounded-md">
            <img src={logo} alt="" />
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{availability} Job Available</p>
            
        </div>
    );
};

export default Job;
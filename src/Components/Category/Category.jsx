// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const Category = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/public/categoryData.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="mt-32  w-3/4 mx-auto">
            <h1 className="text-5xl font-medium text-center">Job Category List</h1>
            <p className="text-center mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-5 mt-10">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default Category;
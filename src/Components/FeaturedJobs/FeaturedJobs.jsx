import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = ({handleViewDetails}) => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('FeatureJobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, [])
    return (
        <div className='w-3/4 mx-auto mt-32'>
            <h1 className="text-5xl font-medium text-center">Featured Jobs</h1>
            <p className="text-center mt-5 mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-5'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob = {featuredJob} handleViewDetails={handleViewDetails}></FeaturedJob>)
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;
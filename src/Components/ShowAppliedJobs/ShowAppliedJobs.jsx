import React from 'react';
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({ job }) => {
    console.log('applied: ', job)
    return (
        <div className='border-solid border-2 mb-10 rounded-md p-5'>
            {/* <h1>You Have applied</h1> */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-10'>
                    <img src={job.logo} alt="" />
                    <div>
                        <h1 className='font-bold text-xl'>{job.title}</h1>
                        <p>{job.company}</p>
                        <div className='flex gap-5'>
                            {
                                job.type.map(x => <div className='border-solid border-2 p-2 rounded-md'>{x}</div>)
                            }
                        </div>
                        <div className='flex gap-10'>
                            <p>{job.location}</p>
                            <p>Salary: {job.salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${job.id}`}>
                        <button className='bg-sky-500 text-white p-3 rounded-md hover:bg-sky-900'>View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ShowAppliedJobs;
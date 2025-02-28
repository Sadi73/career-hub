import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    // console.log(featuredJob);
    const { id, logo, title, company, type, salary, location } = featuredJob;
    // console.log(type)
    return (
        <div className='border-solid border-2 border-gray-400 rounded-md p-5 relative h-72 '>
            <img src={logo} alt="" />
            <h1 className='text-xl font-bold mt-3'>{title}</h1>
            <p>{company}</p>
            <div className='flex '>
                {
                    type.map(x => <p key={x} className='border-solid border-2 border-gray-400 rounded-md p-3 mr-3' >{x}</p>)
                }
            </div>
            <div className='flex justify-between'>
                <p><FontAwesomeIcon icon={faLocationDot} />     {location}</p>
                <p><FontAwesomeIcon icon={faCircleDollarToSlot} />    Salary: {salary}</p>
            </div>
            <Link to={`/details/${id}`}>
                <button className='bg-sky-500 p-3 rounded-md text-white hover:bg-sky-900 absolute bottom-0 mb-5'>View Details</button>
            </Link>

        </div>
    );
};

export default FeaturedJob;
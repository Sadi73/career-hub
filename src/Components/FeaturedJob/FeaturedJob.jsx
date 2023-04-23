import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDollarToSlot,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const FeaturedJob = ({ featuredJob }) => {
    // console.log(featuredJob);
    const { logo, title, company, type, salary, location } = featuredJob;
    console.log(type)
    return (
        <div className='border-solid border-2 border-gray-400 rounded-md p-5'>
            <img src={logo} alt="" />
            <h1 className='text-xl font-bold mt-3'>{title}</h1>
            <p>{company}</p>
            <div className='flex '>
                {
                    type.map(x => <p className='border-solid border-2 border-gray-400 rounded-md p-3 mr-3'>{x}</p>)
                }
            </div>
            <div className='flex justify-between'>
                <p><FontAwesomeIcon icon={faLocationDot} />     {location}</p>
                <p><FontAwesomeIcon icon={faCircleDollarToSlot} />    Salary: {salary}</p>
            </div>

        </div>
    );
};

export default FeaturedJob;
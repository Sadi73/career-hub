// import React from 'react';
import DP from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Banner = () => {
    return (
        <div className='w-3/4 m-auto flex items-center mt-20'>
            <div className='' style={{width:'600px'}}>
                <h1 className='text-5xl font-bold ' style={{lineHeight:'60px'}}>One Step <br />Closer To Your<br/> <span className='text-sky-500'> Dream Job</span></h1>
                <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-sky-500 p-3 rounded-md text-white hover:bg-sky-900'>Get Started</button>
            </div>
            <div>
                <img src={DP} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;
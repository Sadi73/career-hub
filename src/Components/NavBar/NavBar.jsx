// import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='w-3/4 flex justify-between items-center m-auto '>
            <h1 className='font-bold text-3xl'>CareerHub</h1>
            <div>
                <a className='mr-5' href="/">Home</a>
                <a className='mr-5' href="/statistics">Statistics</a>
                <a className='mr-5' href="/appliedJobs">Applied Jobs</a>
                <a href="">Blog</a>
            </div>
            <button className='bg-sky-500 p-3 rounded-md text-white hover:bg-sky-900'>Start Applying</button>
            
        </div>
    );
};

export default NavBar;
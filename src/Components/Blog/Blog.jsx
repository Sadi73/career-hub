import React from 'react';
import NavBar from '../NavBar/NavBar';

const Blog = () => {
    return (
        <div>
            <div className='bg-gray-100 p-10'>
                <NavBar></NavBar>
                <h1 className='text-5xl text-center mt-32'>Blogs</h1>
            </div>
            <div className='w-3/4 mx-auto mt-32'>
                <div className='border-solid border-2 p-10 rounded-md mb-10'>
                    <h1 className='text-xl font-bold mb-5'>When To Use Context API?</h1>
                    <ul className='ml-20'>
                        <li className='list-disc'>When you have data that needs to be shared across multiple components and you want to avoid prop drilling.</li>
                        <li className='list-disc'>When you need to pass data to deeply nested components that are not direct children of the parent component.</li>
                        <li className='list-disc'>When you want to avoid using Redux or other state management libraries for small to medium-sized applications.</li>
                        <li className='list-disc'>When you want to avoid using other techniques such as render props or higher-order components for passing data.</li>
                    </ul>
                </div>
                <div className='border-solid border-2 p-10 rounded-md mb-10'>
                    <h1 className='text-xl font-bold mb-5'>What is Custom Hook?</h1>
                    <p>In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks enable you to extract logic from components and reuse it in a concise and reusable way.</p>
                    <p> A custom hook is created by prefixing the function name with the word "use" (this is a convention in React). For example, a custom hook that manages the state of a form could be called "useFormState". Custom hooks use built-in React hooks, such as useState, useEffect, and useContext, to implement their functionality.</p>
                </div>
                <div className='border-solid border-2 p-10 rounded-md mb-10'>
                    <h1 className='text-xl font-bold mb-5'>What is useRef?</h1>
                    <p>In React, the useRef hook is used to create a reference to a DOM element or a value that persists across component renders. It provides a way to access and manipulate the DOM elements directly in functional components.</p>
                    <p>The useRef hook returns an object with a current property that can be set and accessed. The value of the current property is initially set to undefined, but can be updated to any value. </p>
                </div>
                <div className='border-solid border-2 p-10 rounded mb-10'>
                    <h1 className='text-xl font-bold mb-5'>What is useMemo?</h1>
                    <p>In React, the useMemo hook is used to memoize a value, which means to store the result of a computation so that it can be reused later if the inputs to that computation haven't changed. This can be helpful for optimizing performance by avoiding unnecessary re-computations.</p>
                    <p>The useMemo hook takes two arguments: a function that computes the value, and an array of dependencies that the value depends on. If any of the dependencies change, the memoized value is recomputed. If none of the dependencies have changed, the previously computed value is returned.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-285px)]'>
         <p className='h-0.5 animate-s'>  <PacmanLoader/></p>
        </div>
    );
};

export default LoadingSpinner;
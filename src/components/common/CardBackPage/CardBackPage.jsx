import React from 'react';
import Logo from '../logo/Logo';

const CardBackPage = () => {
    return (
        <div
            className='w-full h-full bg-white flex flex-col items-center justify-center'
        >
            <Logo noAction className='text-xs' />
            <p className='text-[4px]' >Where memories live forever</p>
        </div>
    );
};

export default CardBackPage;
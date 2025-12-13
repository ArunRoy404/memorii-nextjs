import React from 'react';
import Logo from '../logo/Logo';
import { cn } from '@/lib/utils';

const CardBackPage = ({ className }) => {
    return (
        <div
            className={cn(
                'w-full h-full bg-white flex flex-col items-center justify-center',
                className
            )}
        >
            <Logo noAction className='text-xs' />
            <p className='text-[4px]' >Where memories live forever</p>
        </div>
    );
};

export default CardBackPage;
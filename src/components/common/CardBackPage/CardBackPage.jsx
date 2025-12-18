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
            style={{ containerType: 'inline-size' }}
        >
            <Logo noAction className='text-[10cqw]' />
            <p className='text-[4cqw]' >Where memories live forever</p>
        </div>
    );
};

export default CardBackPage;
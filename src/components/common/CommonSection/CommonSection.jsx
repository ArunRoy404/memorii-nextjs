import { cn } from '@/lib/utils';
import React from 'react';

const CommonSection = ({ children, className, title, subtitle, headerClassname }) => {
    return (
        <section
            className={cn(
                'container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16',
                className
            )}
        >
            <div className={cn(
                "text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14",
                headerClassname
            )}>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight'>
                    {title}
                </h1>
                <h2 className='text-lg sm:text-xl md:text-2xl font-medium text-icon'>
                    {subtitle}
                </h2>
            </div>
            {children}
        </section>
    );
};

export default CommonSection;

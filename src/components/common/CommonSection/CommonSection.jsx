import { cn } from '@/lib/utils';
import React from 'react';

const CommonSection = ({ children, className, title, subtitle, headerClassname }) => {
    return (
        <section
            className={cn(
                className
            )}
        >
            <div
                className='container mx-auto px-4 py-12 sm:py-16'
            >
                {!!title || !!subtitle
                    ? (
                        <div className={cn(
                            "text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14",
                            headerClassname
                        )}>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight'>
                                {title}
                            </h1>
                            <h2 className='text-sm md:text-base lg:text-2xl font-medium text-icon'>
                                {subtitle}
                            </h2>
                        </div>
                    )
                    : (<></>)}
                {children}
            </div>
        </section>
    );
};

export default CommonSection;

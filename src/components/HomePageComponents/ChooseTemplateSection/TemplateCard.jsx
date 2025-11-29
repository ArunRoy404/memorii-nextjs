import Image from 'next/image';
import React from 'react';

const TemplateCard = ({ template }) => {
    return (
        <div
            className='cursor-pointer flex flex-col items-center gap-4 md:gap-8'
        >
            <Image
                src={template?.src}
                alt={template?.title}
                className="object-cover rounded-md hover:scale-105 transition-ease-in-out w-full h-full"
                loading="eager" />
            <p className='text-center font-semibold md:text-2xl'>
                {template?.title}
            </p>
        </div>
    );
};

export default TemplateCard;
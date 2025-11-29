import Circle from '@/components/svg/Circle';
import React from 'react';

const HowItWorkCard = ({ step, bg = '#FEF0E7', circleColor }) => {
    const { id, title, description, top, left, bottom, right, rotate } = step;

    // Build the style object conditionally
    const style = {
        ...(top !== undefined && { top }),
        ...(left !== undefined && { left }),
        ...(bottom !== undefined && { bottom }),
        ...(right !== undefined && { right }),
        ...(rotate !== undefined && { transform: `rotate(${rotate})` }),
    };

    return (
        <div
            className='md:absolute xl:p-6 md:p-3 space-y-4 md:space-y-2 xl:max-w-[300px] md:max-w-60 bg-[#F9F9F9] rounded-3xl shadow-[8px_4px_8.4px_0_rgba(0,0,0,0.25)]'
            style={style}
        >
            <div className='flex items-center justify-center'>
                <Circle colorIn={circleColor.in} colorOut={circleColor.out} />
            </div>
            <div className='xl:p-6 md:p-3 text-center' style={{ backgroundColor: bg }}>
                <p className='text-2xl font-bold'>{id}</p>
                <h1 className='xl:pt-6 md:p-3 pb-7 text-xl font-semibold'>{title}</h1>
                <p className='text-[#4B5563] font-medium'>{description}</p>
            </div>
        </div>
    );                                     
};

export default HowItWorkCard;

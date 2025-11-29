import { cn } from '@/lib/utils';
import React from 'react';

const Logo = ({ className }) => {
    return (
        <span className={cn('font-bold tracking-tight', className)}>
            <span className="text-[#08A2A6]">M</span>
            <span className="text-[#F46F55]">e</span>
            <span className="text-[#F69926]">m</span>
            <span className="text-[#2B69BC]">o</span>
            <span className="text-[#F66F56]">r</span>
            <span className="text-[#2B69BC]">i</span>
            <span className="text-[#08A2A6]">i</span>
        </span>
    );
};

export default Logo;
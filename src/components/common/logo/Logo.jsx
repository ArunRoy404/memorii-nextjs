import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className }) => {
    return (
        <Link href='/' className={cn('font-bold tracking-tight select-none cursor-pointer', className)}>
            <span className="text-[#08A2A6]">M</span>
            <span className="text-[#F46F55]">e</span>
            <span className="text-[#F69926]">m</span>
            <span className="text-[#2B69BC]">o</span>
            <span className="text-[#F66F56]">r</span>
            <span className="text-[#2B69BC]">i</span>
            <span className="text-[#08A2A6]">i</span>
        </Link>
    );
};

export default Logo;
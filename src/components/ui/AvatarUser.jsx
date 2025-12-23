import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { cn } from '@/lib/utils';

const AvatarUser = ({ src, alt, className }) => {
    return (
        <Avatar className={cn(
            'w-8 h-8',
            className
        )}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{alt.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar >
    );
};

export default AvatarUser;
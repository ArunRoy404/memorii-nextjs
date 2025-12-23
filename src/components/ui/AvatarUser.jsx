import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const AvatarUser = ({ src, alt }) => {
    return (
        <Avatar className="w-8 h-8">
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{alt.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
};

export default AvatarUser;
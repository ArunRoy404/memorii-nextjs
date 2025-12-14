import Image from 'next/image';
import React from 'react';

export const BookFrontPage = React.forwardRef(({ src }, ref) => (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
        {!!src && (
            <Image
                src={src}
                alt={'Template Front'}
                fill
                className="object-cover"
            />
        )}
    </div>
));
BookFrontPage.displayName = "Cover";

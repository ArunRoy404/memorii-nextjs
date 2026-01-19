import React, { useEffect } from 'react';
import Image from 'next/image';
import { usePagesImagesStore } from '@/store/usePagesImageStore';

export const BookBackPage = React.forwardRef(({ length, ...props }, ref) => {
    const src = '/backPage.png'
    const { insertImageAt } = usePagesImagesStore()

    useEffect(() => {
        insertImageAt(length + 2, src)
    }, [insertImageAt, src, length])


    return (
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
    )
}

);
BookBackPage.displayName = "BackCover";


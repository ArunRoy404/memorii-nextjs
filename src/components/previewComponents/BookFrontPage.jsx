import { usePagesImagesStore } from '@/store/usePagesImageStore';
import Image from 'next/image';
import React, { useEffect } from 'react';

export const BookFrontPage = React.forwardRef(({ src }, ref) => {
    const { insertImageAt } = usePagesImagesStore()

    useEffect(() => {
        insertImageAt(1, src.src)
    }, [insertImageAt, src])

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
})

BookFrontPage.displayName = "Cover";

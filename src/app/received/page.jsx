'use client'

import ReceivedPreview from '@/components/EditorComponents/ReceivedPreview/ReceivedPreview';
import Envelope from '@/components/Envelope/Envelope';
import { useState } from 'react';


const ReceivedPage = () => {
    const [isAnimation, setIsAnimation] = useState(true);

    return (
        <div className='w-dvw h-dvh flex items-center justify-center overflow-hidden'>
            {
                isAnimation ? (
                    <Envelope setIsAnimation={setIsAnimation} />
                ) : (
                    <ReceivedPreview />
                )
            }
        </div>
    );
};

export default ReceivedPage; 
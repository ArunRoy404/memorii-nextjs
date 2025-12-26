'use client'

import { cn } from '@/lib/utils';
import EnvelopeCover from '@/assets/envelope/EnvelopeCover.svg';
import EnvelopeDecorationWaves from '@/assets/envelope/EnvelopeDecorationWaves.svg';
import EnvelopeLeafBottom from '@/assets/envelope/EnvelopeLeafBottom.svg';
import EnvelopeLeafTop from '@/assets/envelope/EnvelopeLeafTop.svg';
import EnvelopeStamp from '@/assets/envelope/EnvelopeStamp.svg';


import Image from 'next/image';
import { useState } from 'react';
import { GenerateLinkDialog } from '../EditorComponents/GenerateLinkDialog';

const EnvelopeForSend = ({ className }) => {
    const [text, setText] = useState('')
    const [isError, setIsError] = useState(false)


    return (
        <>
            <div
                className='relative max-w-max max-h-max '>

                {/* envelope upper part */}
                <div
                    className={cn(
                        'cursor-pointer xl:w-[1000px] w-[90dvw] aspect-[1.76]! bg-envelope relative flex flex-col z-3',
                        className
                    )}
                >

                    {/* envelope body  */}
                    <div
                        className='bg-envelope relative z-10 h-full'
                    >

                        <div
                            className='max-h-max w-full absolute top-0 z-3'
                        >
                            <Image
                                src={EnvelopeCover}
                                alt='envelope cover'
                                className='w-full'
                            />
                        </div>


                        {/* wave  */}
                        <div
                            className='absolute top-0 max-h-max w-full'
                        >
                            <Image
                                src={EnvelopeDecorationWaves}
                                alt='envelope decoration waves'
                                className='w-full'
                            />
                        </div>


                        {/* decorations  */}
                        <div
                            className='relative w-full h-full flex-1 '
                        >
                            <Image
                                src={EnvelopeLeafBottom}
                                alt='envelope content'
                                className='absolute w-[20%] bottom-0 left-0'
                            />
                            <Image
                                src={EnvelopeLeafTop}
                                alt='envelope content'
                                className='absolute w-[20%] top-0 right-0'
                            />
                            <Image
                                src={EnvelopeStamp}
                                alt='envelope content'
                                className='absolute w-[15%] bottom-4 right-4'
                            />


                            <div
                                className='absolute top-[50%] left-5 md:left-20 text-envelope-text'
                            >
                                <h2 className='text-sm md:text-3xl'>To: </h2>
                                <input
                                    onFocus={() => setIsError(false)}
                                    type='text'
                                    className={`md:text-[40px] md:w-100 ${!text ? 'border border-dashed' : ''} ${isError ? 'border-red-500' : ''}`}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Add Recipient Name"
                                />
                            </div>


                            <GenerateLinkDialog
                                className='absolute bottom-2 left-5 md:bottom-10 md:left-20'
                                text={text} setIsError={setIsError} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnvelopeForSend;
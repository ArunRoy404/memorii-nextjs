'use client'

import { cn } from '@/lib/utils';
import EnvelopeCover from '@/assets/envelope/EnvelopeCover.svg';
import EnvelopeDecorationWaves from '@/assets/envelope/EnvelopeDecorationWaves.svg';
import EnvelopeLeafBottom from '@/assets/envelope/EnvelopeLeafBottom.svg';
import EnvelopeLeafTop from '@/assets/envelope/EnvelopeLeafTop.svg';
import EnvelopeStamp from '@/assets/envelope/EnvelopeStamp.svg';


import Image from 'next/image';
import { Button } from '../ui/button';
import { Type } from 'lucide-react';
import { useState } from 'react';
import { GenerateLinkDialog } from '../EditorComponents/GenerateLinkDialog';

const EnvelopeForSend = ({ className }) => {
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState('')


    return (
        <>
            <div
                className='relative max-w-max max-h-max '>

                {/* envelope upper part */}
                <div
                    className={cn(
                        'cursor-pointer w-[1000px] aspect-[1.76]! bg-envelope relative flex flex-col z-3',
                        className
                    )}
                >

                    {/* envelope body  */}
                    <div
                        className='bg-envelope relative z-10 h-full '
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
                            className='relative w-full h-full flex-1'
                        >
                            <Image
                                src={EnvelopeLeafBottom}
                                alt='envelope content'
                                className='absolute bottom-0 left-0'
                            />
                            <Image
                                src={EnvelopeLeafTop}
                                alt='envelope content'
                                className='absolute top-0 right-0'
                            />
                            <Image
                                src={EnvelopeStamp}
                                alt='envelope content'
                                className='absolute bottom-4 right-4'
                            />


                            <div
                                onClick={() => console.log('div clicked')}
                                className='pl-20 text-envelope-text pt-80 relative z-2'
                            >
                                {
                                    showText ?
                                        (<div>
                                            <h2 className='text-3xl'>To: </h2>
                                            <input
                                                type='text'
                                                className={`text-[40px] w-80 ${!text ? 'border border-dashed' : ''}`}
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                            />
                                        </div>
                                        ) : (
                                            <div
                                                onClick={() => setShowText(true)}
                                                className='cursor-pointer flex items-center gap-2 border w-80 p-4 border-dashed'
                                            >
                                                <span className='border '>
                                                    <Type size={14} />
                                                </span>
                                                <span>Add Text</span>
                                            </div>
                                        )
                                }
                            </div>



                            <GenerateLinkDialog />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnvelopeForSend;
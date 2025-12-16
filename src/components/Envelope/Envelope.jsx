'use client'

import { cn } from '@/lib/utils';
import EnvelopeCover from '@/assets/envelope/EnvelopeCover.svg';
import EnvelopeDecorationWaves from '@/assets/envelope/EnvelopeDecorationWaves.svg';
import EnvelopeLeafBottom from '@/assets/envelope/EnvelopeLeafBottom.svg';
import EnvelopeLeafTop from '@/assets/envelope/EnvelopeLeafTop.svg';
import EnvelopeStamp from '@/assets/envelope/EnvelopeStamp.svg';
import anniversaryTemplate from '@/assets/templateImages/anniversaryTemplate.png';


import Image from 'next/image';
import { Button } from '../ui/button';
import { Type } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Envelope = ({ className }) => {
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState('')
    const envelopRef = useRef(null)
    const envelopCoverRef = useRef(null)


    useEffect(() => {
        gsap.set(envelopCoverRef.current, {
            transformOrigin: 'top center',
        });
        gsap.set(envelopRef.current, {
            transformOrigin: 'top center',
        });
    }, [])

    const handleOpen = () => {
        gsap.to(envelopCoverRef.current, {
            rotateX: 180,

            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => {
                gsap.set(envelopCoverRef.current, { zIndex: 0 });
            }
        });


        gsap.to(envelopRef.current, {
            translateY: '100',
            duration: 1.2,
            ease: 'power3.inOut',
        })
    }



    return (
        <div
            ref={envelopRef}
            className='relative max-w-max max-h-max '>

            {/* content */}
            <Image
                src={anniversaryTemplate}
                alt='envelope content'
                className='absolute left-[50%] -translate-x-[50%] z-1 w-[90%] '
            />

            <div className=''/>



            {/* cover  */}
            <div
                ref={envelopCoverRef}
                className='max-h-max w-full absolute top-0 z-3'
            >
                <Image
                    src={EnvelopeCover}
                    alt='envelope cover'
                    className='w-full'
                />
            </div>



            <div
                onClick={handleOpen}
                className={cn(
                    'cursor-pointer w-[1000px] aspect-[1.76]! bg-envelope relative z-2 flex flex-col',
                    className
                )}
            >
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


                {/* content  */}
                <div
                    className='relative w-full flex-1'
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
                        className='pl-20 text-envelope-text pt-30 relative z-2'
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



                    <Button
                        variant='link'
                        className='absolute bottom-10 left-20 p-0  underline hover:scale-100! active:scale-100! text-envelope-text'
                    >
                        Generate the link
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
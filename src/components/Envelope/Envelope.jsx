'use client'

import { cn } from '@/lib/utils';
import EnvelopeCover from '@/assets/envelope/EnvelopeCover.svg';
import EnvelopeDecorationWaves from '@/assets/envelope/EnvelopeDecorationWaves.svg';
import EnvelopeLeafBottom from '@/assets/envelope/EnvelopeLeafBottom.svg';
import EnvelopeLeafTop from '@/assets/envelope/EnvelopeLeafTop.svg';
import EnvelopeStamp from '@/assets/envelope/EnvelopeStamp.svg';
import anniversaryTemplate from '@/assets/templateImages/anniversaryTemplate2.jpg';


import Image from 'next/image';
import { Button } from '../ui/button';
import { Type } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Envelope = ({ className }) => {
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState('')

    const envelopeContainerRef = useRef(null)
    const envelopeCoverRef1 = useRef(null)
    const envelopeCoverRef2 = useRef(null)
    const envelopeFront = useRef(null)
    const envelopeBack = useRef(null)
    const cardContainerRef = useRef(null)



    useEffect(() => {
        gsap.set(envelopeContainerRef.current, {
            transformOrigin: 'top center',
        });
        gsap.set(envelopeCoverRef1.current, {
            transformOrigin: 'top center',
        });
        gsap.set(envelopeCoverRef2.current, {
            transformOrigin: 'top center',
        });
    }, [])



    const handleOpen = () => {
        gsap.to(envelopeContainerRef.current, {
            translateY: '100',
            duration: 1.2,
            ease: 'power3.inOut',
        })


        gsap.to(envelopeCoverRef1.current, {
            rotateX: 180,
            duration: 1.2,
            ease: 'power3.inOut',
        });
        gsap.to(envelopeCoverRef2.current, {
            rotateX: 180,
            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => {
                gsap.set(envelopeCoverRef2.current, { opacity: 0 });
            }
        });



        gsap.to(envelopeFront.current, {
            translateY: '500%',
            delay: 1.3,
            duration: 1.2,
            ease: 'power3.inOut',
        })
        gsap.to(envelopeBack.current, {
            translateY: '500%',
            delay: 1.3,
            duration: 1.2,
            ease: 'power3.inOut',
        })


        const el = cardContainerRef.current;
        const targetHeight = el.scrollHeight;

        gsap.fromTo(
            el,
            { height: 0, overflow: 'hidden' },
            {
                height: targetHeight,
                duration: 3.2,
                ease: 'power3.inOut',
                onComplete: () => {
                    // allow natural resizing after animation
                    el.style.height = 'auto';
                    el.style.overflow = 'visible';
                }
            }
        );
    }




    return (
        <div
            ref={envelopeContainerRef}
            className='relative max-w-max max-h-max '>


            {/* envelope back part */}
            <div
                ref={envelopeBack}
                className={cn(
                    'absolute cursor-pointer w-[1000px] aspect-[1.76]! bg-envelope flex flex-col z-1',
                    className
                )}
            >

                {/* cover  */}
                <div
                    ref={envelopeCoverRef1}
                    className='max-h-max w-full absolute top-0 z-0'
                >
                    <Image
                        src={EnvelopeCover}
                        alt='envelope cover'
                        className='w-full'
                    />
                </div>


                {/* envelope body */}
                <div className='bg-envelope relative z-10 h-full ' />
            </div>




            {/* card container */}
            <div
                ref={cardContainerRef}
                className='absolute overflow-hidden h-full w-full z-1'
            >
                <Image
                    src={anniversaryTemplate}
                    alt='envelope content'
                    className='absolute left-[50%] -translate-x-[50%] w-[900px] h-auto z-1'
                />
            </div>





            {/* envelope upper part */}
            <div
                ref={envelopeFront}
                onClick={handleOpen}
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
                        ref={envelopeCoverRef2}
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



                        <Button
                            variant='link'
                            className='absolute bottom-10 left-20 p-0  underline hover:scale-100! active:scale-100! text-envelope-text'
                        >
                            Generate the link
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
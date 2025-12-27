'use client'

import { cn } from '@/lib/utils';
import EnvelopeCover from '@/assets/envelope/EnvelopeCover.svg';
import EnvelopeDecorationWaves from '@/assets/envelope/EnvelopeDecorationWaves.svg';
import EnvelopeLeafBottom from '@/assets/envelope/EnvelopeLeafBottom.svg';
import EnvelopeLeafTop from '@/assets/envelope/EnvelopeLeafTop.svg';
import EnvelopeStamp from '@/assets/envelope/EnvelopeStamp.svg';
import birthdayTemplate from '@/assets/templateImages/birthdayTemplate2.png';


import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FogTransition from '../fog/FogTransition';

const Envelope = ({ className, setIsAnimation }) => {

    const envelopeContainerRef = useRef(null)
    const envelopeCoverRef1 = useRef(null)
    const envelopeCoverRef2 = useRef(null)
    const envelopeFront = useRef(null)
    const envelopeBack = useRef(null)
    const cardContainerRef = useRef(null)
    const cardRef = useRef(null)
    const fogRef = useRef(null)


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
            delay: 1.5,
            duration: 1.5,
            ease: 'power3.inOut',
        })
        gsap.to(envelopeBack.current, {
            translateY: '500%',
            delay: 1.5,
            duration: 1.5,
            ease: 'power3.inOut',
        })


        const el = cardContainerRef.current;
        const targetHeight = el.scrollHeight;

        gsap.fromTo(
            el,
            { height: 0, overflow: 'hidden' },
            {
                height: targetHeight,
                translateY: '-200',
                delay:0.2,
                duration: 3,
                ease: 'power3.inOut',
                onComplete: () => {
                    el.style.height = 'auto';
                    el.style.overflow = 'visible';
                    fogRef.current?.play()
                    setTimeout(() => {
                        setIsAnimation(false)
                    }, 800)
                }
            }
        );


        gsap.to(cardRef.current, {
            width: '500',
            delay: 2,
            duration: 1.2,
            ease: 'power3.inOut',
        })
    }




    return (
        <>
            <div
                ref={envelopeContainerRef}
                className='relative max-w-max max-h-max '>


                {/* envelope back part */}
                <div
                    ref={envelopeBack}
                    className={cn(
                        'cursor-pointer xl:w-[1000px] w-[90dvw] aspect-[1.76]! bg-envelope relative flex flex-col z-1',
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
                    className='absolute top-0 overflow-hidden h-full w-full z-1'
                >
                    <Image
                        ref={cardRef}
                        src={birthdayTemplate}
                        alt='envelope content'
                        className='absolute left-[50%] -translate-x-[50%] w-[900px] h-auto z-1'
                    />
                </div>





                {/* envelope upper part */}
                <div
                    ref={envelopeFront}
                    onClick={handleOpen}
                    className={cn(
                        'cursor-pointer absolute xl:w-[1000px] w-[90dvw] aspect-[1.76]! bg-envelope top-0 flex flex-col z-3',
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
                                <div>
                                    <h2 className='text-sm md:text-3xl'>To: </h2>
                                    <h1 className='md:text-[40px] '>Maishami</h1>
                                </div>
                            </div>



                            <Button
                                variant='link'
                                className='absolute text-[10px] md:text-base bottom-2 left-5 md:bottom-10 md:left-20 p-0 underline hover:scale-100! active:scale-100! text-envelope-text'
                            >
                                Please click here to open your Memorii mail
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            <FogTransition ref={fogRef} />
        </>
    );
};

export default Envelope;
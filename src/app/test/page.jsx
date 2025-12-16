'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function EnvelopeFlap() {
    const flapRef = useRef(null);

    useEffect(() => {
        gsap.set(flapRef.current, {
            transformOrigin: 'top center',
            rotateX: 0,
        });


    }, []);

    const flip = () => {
        gsap.to(flapRef.current, {
            rotateX: 180,
            duration: 1.2,
            ease: 'power3.inOut',
        });
    }

    const unflip = () => {
        gsap.to(flapRef.current, {
            rotateX: 0,
            duration: 1.2,
            ease: 'power3.inOut',
        });
    }

    return (
        <div
            className='mt-100'
        >
            <div
                className='bg-green-400'
                style={{
                    perspective: '1000px',
                    width: '300px',
                    margin: '100px auto',
                }}
            >
                <div
                    ref={flapRef}
                    style={{
                        height: '150px',
                        background: '#e63946',
                        borderRadius: '0 0 8px 8px',
                    }}
                />
            </div>

            <button
                onClick={flip}
                className='bg-red-400 text-white p-2 rounded-md'
            >
                flip
            </button>
            <button
                onClick={unflip}
                className='bg-red-400 text-white p-2 rounded-md'
            >
                unflip
            </button>
        </div>
    );
}


export default EnvelopeFlap;
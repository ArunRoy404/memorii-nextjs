'use client'

import React, { useEffect, useRef } from 'react';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
            );
        }


        if (textRef.current) {
            gsap.from(textRef.current.children, {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.3,
                ease: 'power3.out',
            });
        }

        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.8,
                    ease: "power3.out",
                    onStart: () => buttonRef.current.classList.remove("invisible"),
                }
            );
        }

    }, []);

    return (
        <div className="py-10 min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-50 via-white to-pink-50 px-4">
            {/* decoration cards  */}
            <div
                className="absolute top-20 left-10 w-24 h-32 bg-linear-to-br from-pink-200 to-pink-300 rounded-lg shadow-lg opacity-20 transform -rotate-12"
            />
            <div
                className="absolute bottom-32 right-16 w-28 h-36 bg-linear-to-br from-cyan-200 to-cyan-300 rounded-lg shadow-lg opacity-20 transform rotate-6"
            />
            <div
                className="absolute top-40 right-20 w-20 h-28 bg-linear-to-br from-purple-200 to-purple-300 rounded-lg shadow-lg opacity-20 transform rotate-12"
            />
            <div
                className="absolute bottom-20 left-20 w-32 h-40 bg-linear-to-br from-orange-200 to-orange-300 rounded-lg shadow-lg opacity-20 transform -rotate-6"
            />



            {/* 404 Card */}
            <div
                ref={cardRef}
                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border-4 border-primary opacity-0"
            >

                <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-pink-500">
                    404
                </h1>
                <div ref={textRef} className="mt-6 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        {`Looks like this page doesn't exist or has been moved. Let's get you back on track.`}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-primary pt-2">
                        <Search size={20} />
                        <span className="text-sm font-medium">
                            {`We'll help you find your way back`}
                        </span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div
                ref={buttonRef}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center invisible"
            >

                <Link
                    href="/"
                >
                    <Button size={'lg'} className={'rounded-full'}>
                        <Home size={20} />
                        <span>Back to Home</span>
                    </Button>
                </Link>
                <Link
                    href="/templates"
                >
                    <Button size={'lg'} variant={'outline'} className={'rounded-full'}>
                        Templates
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
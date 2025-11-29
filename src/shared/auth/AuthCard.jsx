import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { gsap } from 'gsap';

import Logo from '@/components/common/logo/Logo';

export default function AuthCard({ SetLogo = Logo, title, subtitle, children, className }) {
    const cardRef = useRef(null);
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Set initial states immediately
        gsap.set(cardRef.current, {
            opacity: 0,
            scale: 0.95,
            y: 40
        });

        gsap.set(headerRef.current.children, {
            opacity: 0,
            y: 20
        });

        gsap.set(contentRef.current.children, {
            opacity: 0,
            y: 25
        });

        const ctx = gsap.context(() => {
            // Card entrance
            gsap.to(cardRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            });

            // Header children stagger
            gsap.to(headerRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.3
            });

            // Content children stagger
            gsap.to(contentRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: "power2.out",
                delay: 0.6
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <Card
            ref={cardRef}
            className="w-full rounded-3xl border-none shadow-[0_20px_40px_-4px_rgba(145,158,171,0.16)] max-w-[750px] bg-[#FDFAF5] my-10 md:py-24 lg:px-12 "
        >

            {/* header  */}
            <CardHeader ref={headerRef} className="space-y-2 md:space-y-4 text-5xl text-center pb-2">
                <div className="flex items-center justify-center">
                    <SetLogo className="text-3xl md:text-5xl" />
                </div>
                {
                    !!title && (
                        <CardTitle className=' max-w-[450px] mx-auto text-xl md:text-3xl text-primary-foreground font-bold'>
                            {title}
                        </CardTitle>
                    )
                }

                {
                    !!subtitle && (
                        <h3 className=' max-w-[450px] mx-auto text-lg text-subtitle font-medium'>
                            {subtitle}
                        </h3>
                    )
                }
            </CardHeader>

            {/* content  */}
            <CardContent
                ref={contentRef}
                className={className}
            >
                {children}
            </CardContent>
        </Card>
    );
}
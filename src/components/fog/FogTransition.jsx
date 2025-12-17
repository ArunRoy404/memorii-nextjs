'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function FogTransition() {
    const fogRef = useRef(null)


    useEffect(() => {
        const tl = gsap.timeline()
        tl
            // fog gently appears
            .to(fogRef.current, {
                opacity: 1,
                filter: 'blur(15px)',
                duration: 0.8,
                ease: 'power2.out',
            })
    }, [])


    return (
        <div
            ref={fogRef}
            className="fixed inset-0 z-9999 pointer-events-none"
            style={{
                background: 'white',
                opacity: 0,
                filter: 'blur(0px)',
            }}
        />
    )
}

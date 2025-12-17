'use client'

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import gsap from 'gsap'

const FogTransition = forwardRef(function FogTransition(_, ref) {
    const fogRef = useRef(null)
    const tlRef = useRef(null)

    useEffect(() => {
        tlRef.current = gsap.timeline({ paused: true })

        tlRef.current.to(fogRef.current, {
            opacity: 1,
            filter: 'blur(10px)',
            duration: 1,
            ease: 'power2.out',
        })
    }, [])

    
    
    useImperativeHandle(ref, () => ({
        play: () => tlRef.current?.play(),
        reverse: () => tlRef.current?.reverse(),
    }))



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
})

export default FogTransition

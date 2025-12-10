"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children }) {
    const lenisRef = useRef(null);
    const pathname = usePathname();



    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            smoothTouch: false,
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    useEffect(() => {
        if (!lenisRef.current) return;

        lenisRef.current.scrollTo(0, {
            immediate: true,
            force: true,
        });
    }, [pathname]);

    return children;
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from '@/components/common/logo/Logo'
import MobileNavSheet from './MobileNavSheet'
import { useEffect, useState } from 'react'
import NavLinks from './NavLinks'


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY

            if (currentScroll > lastScrollY && currentScroll > 80) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(currentScroll)
        }


        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <header
            className={`bg-neutral/80 backdrop-blur-md sticky top-0 z-10 transition-transform duration-500 ease-in-out 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <nav
                className={`container mx-auto px-4 py-4 w-full flex justify-between items-center`} >
                {/* Logo */}
                < Logo className="text-3xl" />

                {/* Desktop Links */}
                < div className="hidden xl:flex space-x-14 items-center" >
                    <NavLinks />
                </div >

                {/* actions  */}
                <div className='flex items-center gap-2'>
                    <div className='hidden xl:block space-x-4'>
                        <Link href="/login">
                            <Button >Login</Button>
                        </Link>
                        <Link href="/get-started">
                            <Button variant="outlineShiny">Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <MobileNavSheet />
                </div>
            </nav >
        </header>
    )
}
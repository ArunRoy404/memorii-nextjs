'use client'

import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { useEditorStore } from '@/store/useEditorStore'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const EcardTimer = () => {
    const { ecard } = useEditorStore()
    const { templateId } = useParams()
    const [timeLeft, setTimeLeft] = useState('')
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        if (!ecard?.expires_at) return

        const calculateTimeLeft = () => {
            const now = new Date()
            const expiry = new Date(ecard.expires_at)
            const difference = expiry.getTime() - now.getTime()

            if (difference <= 0) {
                setTimeLeft('Expired')
                setIsExpired(true)
                return
            }

            const hours = Math.floor(difference / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

            if (hours > 0) {
                setTimeLeft(`Expires in ${hours}h`)
            } else {
                setTimeLeft(`Expires in ${minutes}m`)
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 60000) // update every minute

        return () => clearInterval(timer)
    }, [ecard?.expires_at])

    if (!ecard?.expires_at || isExpired) return null

    const tooltipMessage = (
        <div className="flex flex-col gap-2 p-1">
            <p className="text-sm">
                This card will expire in {timeLeft.replace('Expires in ', '')}. 
                To save it permanently, you must login.
            </p>
            <Link 
                href={`/login?next=/e-card/${templateId}`}
                className="text-primary hover:underline font-bold text-sm block"
            >
                Login Now
            </Link>
        </div>
    )

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-pointer">
                        {/* Desktop View */}
                        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full border border-amber-200 text-xs font-semibold whitespace-nowrap">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{timeLeft}</span>
                        </div>
                        
                        {/* Mobile View */}
                        <div className="md:hidden flex items-center justify-center p-1.5 rounded-full bg-red-50 text-red-500 border border-red-100">
                            <Clock className="w-4 h-4 animate-pulse" />
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[280px] bg-white text-slate-900 border-slate-200">
                    {tooltipMessage}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default EcardTimer

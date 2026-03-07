'use client'
import { useEffect } from 'react'

export function usePreventLeave(enabled = true) {
    useEffect(() => {
        if (!enabled) return

        const handleBeforeUnload = (e) => {
            e.preventDefault()
            e.returnValue = ''
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }, [enabled])
}
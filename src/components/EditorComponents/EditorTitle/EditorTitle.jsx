'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { Loader2, Check } from 'lucide-react'
import { useUpdateEcard } from '@/hooks/ECard/e-card.hook'
import { useEditorStore } from '@/store/useEditorStore'

const DEBOUNCE_DELAY = 1000
const SAVED_DISPLAY_DURATION = 2500

export default function EditorTitle() {
    const { templateId } = useParams()
    const { mutate: updateEcard, isPending } = useUpdateEcard(templateId)
    const { ecard } = useEditorStore()


    const [title, setTitle] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [showSaved, setShowSaved] = useState(false)
    const inputRef = useRef(null)
    const debounceTimer = useRef(null)
    const savedTimer = useRef(null)

    // Focus input when editing starts
    useEffect(() => {
        if (isEditing) inputRef.current?.focus()
    }, [isEditing])

    useEffect(() => {
        if (ecard?.title) {
            setTitle(ecard.title)
        } else {
            setTitle('Untitled E-Card')
        }
    }, [ecard?.title])

    const triggerUpdate = useCallback((value) => {
        updateEcard({ title: value }, {
            onSuccess: () => {
                setShowSaved(true)
                clearTimeout(savedTimer.current)
                savedTimer.current = setTimeout(() => setShowSaved(false), SAVED_DISPLAY_DURATION)
            }
        })
    }, [updateEcard])

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)

        // Debounce the API call
        clearTimeout(debounceTimer.current)
        debounceTimer.current = setTimeout(() => {
            if (value.trim()) triggerUpdate(value.trim())
        }, DEBOUNCE_DELAY)
    }

    const handleBlur = () => {
        setIsEditing(false)
        clearTimeout(debounceTimer.current) // cancel pending debounce
        if (title.trim()) triggerUpdate(title.trim()) // save immediately on blur
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') inputRef.current?.blur()
        if (e.key === 'Escape') {
            setTitle(initialTitle)
            setIsEditing(false)
        }
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearTimeout(debounceTimer.current)
            clearTimeout(savedTimer.current)
        }
    }, [])

    return (
        <div className="flex items-center gap-2">
            {isEditing ? (
                <input
                    ref={inputRef}
                    value={title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className="text-sm font-semibold border-b border-primary outline-none bg-transparent w-40 text-gray-800 placeholder:text-gray-400"
                    placeholder="Enter title..."
                    maxLength={60}
                />
            ) : (
                <span
                    onClick={() => setIsEditing(true)}
                    className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-primary transition-colors truncate max-w-[160px]"
                    title={title}
                >
                    {title}
                </span>
            )}

            {/* Status indicator */}
            <div className="flex items-center w-20">
                {isPending && (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-muted-foreground" />
                )}
                {!isPending && showSaved && (
                    <span className="flex items-center gap-1 text-xs text-green-500 animate-fade-in">
                        <Check className="w-3 h-3" />
                        Saved
                    </span>
                )}
            </div>
        </div>
    )
}
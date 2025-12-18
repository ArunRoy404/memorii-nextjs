'use client'

import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import TextOptions from "./TextOptions/TextOptions"
import StickersOptions from "./StickersOptions/StickersOptions"
import memoryOptionsData from "@/data/memoryOptionsData"
import MemoryTextInsert from "./Editor/MemoryTextInsert"

const MemoryOptions = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClick = (key) => {
        // ✅ If clicking same active tab → close everything
        if (activeTab === key) {
            setActiveTab(null)
            setOpen(false)
        }
        // ✅ If clicking different tab → switch + open dropdown
        else {
            setActiveTab(key)
            setOpen(true)
        }
    }

    return (
        <DropdownMenu open={open} modal={false}>
            <DropdownMenuTrigger asChild>
                <div className='flex flex-col gap-3 bg-white text-center p-3 rounded-2xl max-h-max'>
                    {memoryOptionsData?.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleClick(item.key)}
                            className={`cursor-pointer flex border rounded-xl flex-col items-center justify-center px-4 py-2 font-semibold
                            ${activeTab === item.key ? 'border-primary text-primary' : ''}`}
                        >
                            {item.icon}
                            <p>{item.label}</p>
                        </button>
                    ))}
                </div>
            </DropdownMenuTrigger>



            {open && !!activeTab && (
                <>
                    {/* ✅ Text Content */}
                    {activeTab === 'text' && <MemoryTextInsert />}

                    {/* ✅ Sticker Content */}
                    {activeTab === 'sticker' && <StickersOptions setActiveTab={setActiveTab} setOpen={setOpen} />}
                </>
            )}
        </DropdownMenu>
    )
}

export default MemoryOptions;
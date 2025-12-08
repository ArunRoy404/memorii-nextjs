'use client'

import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import cardOptionsData from "@/data/cardOptionsData"

import LayoutDropdown from "./LayoutDropdown"
import TextOptions from "./TextOptions"

const CardOptions = () => {
    const [activeTab, setActiveTab] = useState(null)   // ✅ Start closed
    const [open, setOpen] = useState(false)           // ✅ Control Dropdown

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
                    {cardOptionsData?.map((item) => (
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
                    {/* ✅ Layout Content */}
                    {activeTab === 'layout' && <LayoutDropdown setActiveTab={setActiveTab} setOpen={setOpen} />}


                    {/* ✅ Text Content */}
                    {activeTab === 'text' && <TextOptions />}

                    {/* ✅ Sticker Content */}
                    {activeTab === 'sticker' && (
                        <div className="space-y-3">
                            <h3 className="font-semibold">Sticker Options</h3>
                            <button className="w-full border rounded p-2">Emoji</button>
                            <button className="w-full border rounded p-2">Badge</button>
                            <button className="w-full border rounded p-2">Icons</button>
                        </div>
                    )}
                </>
            )}
        </DropdownMenu>
    )
}

export default CardOptions

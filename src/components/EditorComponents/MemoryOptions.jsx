'use client'

import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import StickersOptions from "./StickersOptions/StickersOptions"
import memoryOptionsData, { memoryPromptsData } from "@/data/memoryOptionsData"
import MemoryTextInsert from "./Editor/MemoryTextInsert"
import ImageOptions from "./Editor/ImageOptions"
import { useEditorStore } from "@/store/useEditorStore"
import LayersOptions from "./LayerOption/LayersOptions"
import PromptOptions from "./PromptOptions/PromptOptions"



const MemoryOptions = () => {
    const { pages, currentPage } = useEditorStore()
    const [activeTab, setActiveTab] = useState(null)
    const [open, setOpen] = useState(false)
    const [isMemoryPage, setIsMemoryPage] = useState(false)



    useEffect(() => {
        const pageJson = pages[currentPage]
        if (!pageJson?.layout) return
        const state = pageJson?.layout === 'blank' ? false : true;
        setIsMemoryPage(state)

    }, [currentPage])




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
                <div className={`flex flex-col gap-3 bg-white text-center p-3 rounded-2xl max-h-max`}>
                    {!isMemoryPage && memoryOptionsData?.map((item) => (
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


                    {isMemoryPage && memoryPromptsData?.map((item) => (
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
                    {/* ✅ Image Content */}
                    {activeTab === 'image' && <ImageOptions />}

                    {/* ✅ Text Content */}
                    {activeTab === 'text' && <MemoryTextInsert />}

                    {/* ✅ Sticker Content */}
                    {activeTab === 'sticker' && <StickersOptions setActiveTab={setActiveTab} setOpen={setOpen} />}

                    {/* ✅ Prompts Content */}
                    {activeTab === 'prompts' && <PromptOptions setActiveTab={setActiveTab} setOpen={setOpen} />}

                    {/* ✅ Layers Content */}
                    {activeTab === 'layers' && <LayersOptions setActiveTab={setActiveTab} setOpen={setOpen} />}
                </>
            )}
        </DropdownMenu>
    )
}

export default MemoryOptions;
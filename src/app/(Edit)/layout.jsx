'use client'

import EditorTopBar from "@/shared/Editor/EditorTopBar";
import EditorFooter from "@/shared/Editor/EditorFooter";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PreviewTopBar from "@/shared/Editor/PreviewTopBar";
import SendTopBar from "@/shared/Editor/SendTopBar";


export default function EditorLayout({ children }) {
    const pathname = usePathname()
    const [isPreview, setIsPreview] = useState(false)
    const [isEditor, setIsEditor] = useState(false)
    const [isSend, setIsSend] = useState(false)

    useEffect(() => {
        pathname.includes('/preview')
            ? setIsPreview(true)
            : setIsPreview(false)

        pathname.includes('/editor')
            ? setIsEditor(false)
            : setIsEditor(true)

        pathname.includes('/send')
            ? setIsSend(true)
            : setIsSend(false)
    }, [pathname])


    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col">
            <div
                className={`absolute z-10 top-0 w-full ${isEditor ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-500`}
            >
                <EditorTopBar />
            </div>

            <div
                className={`absolute z-10 top-0 w-full ${!isPreview ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-1000`}
            >
                <PreviewTopBar />
            </div>

            <div
                className={`sticky top-0 z-10 w-full ${!isSend ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-1000`}
            >
                <SendTopBar />
            </div>


            <div className="flex-1 overflow-y-scroll" >
                {children}
            </div>


            <div
                className={`sticky bottom-0 w-full ${isEditor ? 'translate-y-full' : 'translate-y-0'} transition-transform duration-500`}
            >
                <EditorFooter />
            </div>
        </div>
    );
}

'use client'

import EditorTopBar from "@/shared/Editor/EditorTopBar";
import EditorFooter from "@/shared/Editor/EditorFooter";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



export default function EditorLayout({ children }) {
    const pathname = usePathname()
    const [isPreview, setIsPreview] = useState(false)

    useEffect(() => {
        if (pathname.includes('/preview')) {
            setIsPreview(true)
        } else {
            setIsPreview(false)
        }
    }, [pathname])


    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col overflow-hidden">
            <EditorTopBar />
            <div className="flex-1" >
                {children}
            </div>

            <div
                className={`sticky bottom-0 w-full ${isPreview ? 'translate-y-full' : 'translate-y-0'} transition-transform duration-1000`}
            >
                <EditorFooter />
            </div>
        </div>
    );
}

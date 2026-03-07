'use client'

import EditorTopBar from "@/shared/Editor/EditorTopBar";
import EditorFooter from "@/shared/Editor/EditorFooter";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PreviewTopBar from "@/shared/Editor/PreviewTopBar";
import SendTopBar from "@/shared/Editor/SendTopBar";
import { useEditorStore } from "@/store/useEditorStore";
import { usePreventLeave } from "@/hooks/PreventLeave/usePreventLeave";

const ChildrenContainer = ({ children }) => {
    return (
        <div className="flex-1 overflow-y-auto" >
            {children}
        </div>
    )
}

export default function EditorLayout({ children }) {
    const pathname = usePathname()
    const [isPreview, setIsPreview] = useState(false)
    const [isEditor, setIsEditor] = useState(false)
    const [isSend, setIsSend] = useState(false)
    const { isTemplateLoading } = useEditorStore()

    useEffect(() => {
        pathname.includes('/preview')
            ? setIsPreview(true)
            : setIsPreview(false)

        pathname.includes('/e-card')
            ? setIsEditor(false)
            : setIsEditor(true)

        pathname.includes('/send')
            ? setIsSend(true)
            : setIsSend(false)
    }, [pathname])

    // 👇 Prevents tab close / refresh — shows browser native dialog
    usePreventLeave(true)

    // 👇 Intercepts browser back/forward — shows your custom dialog
    useEffect(() => {
        window.history.pushState(null, '', window.location.href)

        const handlePopState = () => {
            window.history.pushState(null, '', window.location.href)
            setShowDiscardDialog(true)
        }

        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])


    if (isTemplateLoading) return (
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
    )

    return (
        <div className="w-full h-dvh overflow-hidden bg-gray-100 flex flex-col">
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


            <ChildrenContainer>
                {children}
            </ChildrenContainer>


            <div
                className={`bottom-0 w-full ${isEditor ? 'fixed translate-y-full' : 'translate-y-0'} transition-transform duration-500`}
            >
                <EditorFooter />
            </div>
        </div>
    );
}

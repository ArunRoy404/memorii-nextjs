'use client';

import HTMLFlipBook from "react-pageflip";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import { useEffect, useState } from "react";
import { BookFrontPage } from "@/components/previewComponents/BookFrontPage";
import { BookPage } from "@/components/previewComponents/BookPage";
import { BookBackPage } from "@/components/previewComponents/BookBackPage";


const PreviewPage = () => {
    const { editorRef, pages } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    console.log(editorRef);

    const [bookProps, setBookProps] = useState({
        width: null,
        height: null,
    })


    useEffect(() => {
        if (editorRef?.getWidth) {
            let width = Math.round(editorRef?.getWidth())
            let height = Math.round(editorRef?.getHeight())

            if (width > 500) {
                width = 500
                height = Math.round(height * (500 / width))
            }

            setBookProps({
                width,
                height,
            })
        }
    }, [editorRef])

    if (!bookProps.width && !bookProps.height) return <p>Loading...</p>
    return (
        <div className="h-full w-full overflow-hidden flex items-center justify-center ">
            <HTMLFlipBook
                key={"double"}
                width={bookProps.width}
                height={bookProps.height}
                showCover={true}
                maxShadowOpacity={0.1}
            >
                <BookFrontPage src={selectedTemplate?.src} />
                {
                    pages.map((page, index) => (
                        <BookPage
                            key={index}
                            page={page}
                        />
                    ))
                }
                <BookBackPage />
            </HTMLFlipBook>
        </div>
    );
};

export default PreviewPage;
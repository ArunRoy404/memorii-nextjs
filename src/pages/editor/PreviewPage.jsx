'use client';

import HTMLFlipBook from "react-pageflip";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import { useEffect, useRef, useState } from "react";
import { BookFrontPage } from "@/components/previewComponents/BookFrontPage";
import { BookPage } from "@/components/previewComponents/BookPage";
import { BookBackPage } from "@/components/previewComponents/BookBackPage";
import { Button } from "@/components/ui/button";


const PreviewPage = () => {
    const { editorRef, pages } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    const bookRef = useRef(null)

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
        <div className="h-full w-full overflow-hidden flex flex-col items-center justify-center ">
            <HTMLFlipBook
                ref={bookRef}
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



            <div className="flex items-center justify-between"
                style={{ width: bookProps.width * 2 }}
            >
                <Button
                    onClick={() => bookRef?.current?.pageFlip()?.flipPrev()}
                    variant="link" size="sm" className='p-0'>
                    Previous
                </Button>
                <Button
                    onClick={() => bookRef?.current?.pageFlip()?.flipNext()}
                    variant="link" size="sm" className='p-0'>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default PreviewPage;
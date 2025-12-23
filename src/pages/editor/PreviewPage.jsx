'use client';

import HTMLFlipBook from "react-pageflip";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import { useEffect, useRef, useState } from "react";
import { BookFrontPage } from "@/components/previewComponents/BookFrontPage";
import { BookPage } from "@/components/previewComponents/BookPage";
import { BookBackPage } from "@/components/previewComponents/BookBackPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCardTypeStore } from "@/store/useCardTypeStore";


const PreviewPage = () => {
    const { editorRef, pages } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();
    const bookRef = useRef(null)
    const { cardType } = useCardTypeStore()


    const [bookProps, setBookProps] = useState({
        width: null,
        height: null,
    })

    useEffect(() => {
        if (editorRef?.getWidth) {
            const maxWidth = 500

            const originalWidth = Math.round(editorRef?.getWidth())
            const originalHeight = Math.round(editorRef?.getHeight())
            let width = originalWidth
            let height = originalHeight


            if (width > maxWidth) {
                height = Math.round(height * (maxWidth / width))
                width = maxWidth
            }

            setBookProps({
                width,
                height,
            })
        }
    }, [editorRef])


    if (!bookProps.width && !bookProps.height) return <p>Template load failed, create a new template from {" "}
        <Link className="text-primary underline" href="/templates">here</Link>
    </p>
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
                    pages.map((page, index) => {
                        if (cardType === 'eCard') {
                            return (
                                <BookPage
                                    index={index}
                                    key={index}
                                    page={page}
                                />
                            )
                        } else {
                            return (
                                <BookPage
                                    index={index}
                                    key={index}
                                    page={page}
                                    width={760}
                                    height={1080}
                                />
                            )
                        }
                    })
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
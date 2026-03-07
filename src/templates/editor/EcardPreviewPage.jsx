'use client';

import HTMLFlipBook from "react-pageflip";
import { useEditorStore } from "@/store/useEditorStore";
import { useEffect, useRef, useState } from "react";
import { BookBackPage } from "@/components/previewComponents/BookBackPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetECard } from "@/hooks/ECard/e-card.hook";
import { BookFrontPage } from "@/components/previewComponents/BookFrontPage";
import { BookPage } from "@/components/previewComponents/BookPage";


const EcardPreviewPage = () => {
    const { templateId } = useParams()
    const { data, isLoading } = useGetECard(templateId);
    const { editorRef, isTemplateLoading, setIsTemplateLoading, setPages, setFrontPage, setEcard } = useEditorStore()
    const bookRef = useRef(null)
    const ecard = data?.ecard


    console.log(ecard);


    const [bookProps, setBookProps] = useState({
        width: null,
        height: null,
    })

    useEffect(() => {
        const maxWidth = 500

        const originalWidth = 1800
        const originalHeight = 2400
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
    }, [])

    if (isLoading) return <p>Loading...</p>


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
                <BookFrontPage src={ecard?.template?.image} />
                {/* {
                    pages.map((page, index) => {
                        return (
                            <BookPage
                                index={index}
                                key={index}
                                page={page}
                                width={1800}
                                height={2400}
                            />
                        )
                    })
                } */}
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

export default EcardPreviewPage;
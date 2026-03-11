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
import Loader from "@/components/common/Loader/Loader";


const EcardPreviewPage = () => {
    const { templateId } = useParams()
    const { setIsTemplateLoading, setEcard, setPages } = useEditorStore()
    const { data, isPending } = useGetECard(templateId);
    const bookRef = useRef(null)
    const ecard = data?.ecard
    const eCardPages = data?.pages || [null]


    const maxWidth = 500
    const originalWidth = 1800
    const originalHeight = 2400


    const [bookProps, setBookProps] = useState({
        width: null,
        height: null,
    })


    useEffect(() => {
        if (!isPending && !!data) {
            setIsTemplateLoading(false)
            setPages(eCardPages || [null])
            setEcard(ecard)
        }
    }, [isPending, setIsTemplateLoading, data, setPages, setEcard])


    useEffect(() => {
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

    if (isPending) return <Loader />


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
                {
                    eCardPages.map((page, index) => {
                        return (
                            <BookPage
                                index={index}
                                key={index}
                                page={page?.page_data}
                                width={originalWidth}
                                height={originalHeight}
                            />
                        )
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

export default EcardPreviewPage;
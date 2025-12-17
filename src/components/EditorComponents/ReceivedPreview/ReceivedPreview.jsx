'use client';

import HTMLFlipBook from "react-pageflip";
import {  useRef } from "react";
import { BookFrontPage } from "@/components/previewComponents/BookFrontPage";
import { BookPage } from "@/components/previewComponents/BookPage";
import { BookBackPage } from "@/components/previewComponents/BookBackPage";
import { Button } from "@/components/ui/button";
import birthdayTemplate from '@/assets/templateImages/birthdayTemplate2.png';
import data from '@/demoTemplate/demo-preview.json';


const ReceivedPreview = () => {

    const bookRef = useRef(null)



    const width = data.state.width
    const height = data.state.height
    const pages = data.state.pages



    return (
        <div className="h-full w-full overflow-hidden flex flex-col items-center justify-center ">
            <HTMLFlipBook
                ref={bookRef}
                key={"double"}
                width={width}
                height={height}
                showCover={true}
                maxShadowOpacity={0.1}
            >
                <BookFrontPage src={birthdayTemplate} />
                {
                    pages.map((page, index) => (
                        <BookPage
                            width={width}
                            height={height}
                            key={index}
                            page={page}
                        />
                    ))
                }
                <BookBackPage />
            </HTMLFlipBook>



            <div className="flex items-center justify-between"
                style={{ width: width * 2 }}
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

export default ReceivedPreview;
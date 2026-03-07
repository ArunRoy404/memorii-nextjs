'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import CardBackPage from "@/components/common/CardBackPage/CardBackPage";
import { useEditorStore } from "@/store/useEditorStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardPreview from "./CardPreview";


const EditorFooter = () => {
  const { saveCurrentPage, currentPage, setCurrentPage, pages, editorRef, frontPage } = useEditorStore()
  const [activeIndex, setActiveIndex] = useState(null);


  let aspectRatio = 3 / 4

  if (editorRef?.getWidth) {
    aspectRatio = editorRef?.getWidth() / editorRef?.getHeight()
  }

  const handleSavePage = () => {
    saveCurrentPage();
  }

  const handleSelectPage = (index) => {
    handleSavePage();
    setCurrentPage(index);
    setActiveIndex(index);
  }

  useEffect(() => { setActiveIndex(currentPage) }, [currentPage])


  return (
    <div className="flex items-center justify-center py-2 bg-white overflow-x-auto no-scrollbar">
      <Carousel
        opts={{
          align: "start",
        }}
        className='w-80'
      >
        <CarouselContent>
          <CarouselItem className="basis-1/3 m-0! max-w-max!">
            <div className="border cursor-pointer overflow-hidden w-16 md:w-20 border-gray-300 shrink-0"
              style={{ aspectRatio }}
            >
              <div className="relative w-full h-full overflow-hidden">
                {!!frontPage && (
                  <Image
                    src={frontPage}
                    alt={'Template Front'}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </CarouselItem>

          {pages.map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 max-w-max! pl-1!">
              <div
                style={{ aspectRatio }}
                className={`border cursor-pointer overflow-hidden w-16 md:w-20 shrink-0 ${index === activeIndex ? "border-primary" : "border-gray-300"}`}
                onClick={() => handleSelectPage(index)}
              >
                <CardPreview index={index} />
              </div>
            </CarouselItem>
          ))}

          <CarouselItem className="basis-1/3 max-w-max! pl-1!">
            <div
              style={{ aspectRatio }}
              className="border cursor-pointer overflow-hidden w-16 md:w-20 border-gray-300 shrink-0">
              <CardBackPage />
            </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default EditorFooter;

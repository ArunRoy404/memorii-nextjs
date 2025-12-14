'use client'

import Image from "next/image";
import { useState } from "react";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
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
  const { saveCurrentPage, setCurrentPage, pages, editorRef } = useEditorStore()
  const { selectedTemplate } = useEditorTemplateStore();
  const [activeIndex, setActiveIndex] = useState(0);

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


  // const handleNextPage = () => {
  //   handleSavePage();
  //   setCurrentPage(Math.min(currentPage + 1, pages.length - 1));
  // }
  // const handlePreviousPage = () => {
  //   handleSavePage();
  //   setCurrentPage(Math.max(currentPage - 1, 0));
  // }

  return (
    <div className="flex items-center justify-center p-2 bg-white overflow-x-auto no-scrollbar">
      {/* <Button
        variant="ghost"
        size="icon"
        onClick={handlePreviousPage}
        className="p-2 hidden sm:flex"
      >
        <ChevronLeft />
      </Button> */}


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
                {!!selectedTemplate && (
                  <Image
                    src={selectedTemplate?.src}
                    alt={selectedTemplate?.title || 'Template Front'}
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



      {/* <Button
        variant="ghost"
        size="icon"
        onClick={handleNextPage}
        className="p-2 hidden sm:flex"
      >
        <ChevronRight />
      </Button> */}
    </div>
  );
};

export default EditorFooter;

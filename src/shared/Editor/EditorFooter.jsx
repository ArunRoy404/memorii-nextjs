'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import CardBackPage from "@/components/common/CardBackPage/CardBackPage";
import { useEditorStore } from "@/store/useEditorStore";
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const EditorFooter = () => {
  const { editorRef, currentPage, saveCurrentPage, setCurrentPage, pages } = useEditorStore()
  const { selectedTemplate } = useEditorTemplateStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataURL, setDataURL] = useState(null)


  useEffect(() => {
    if (!editorRef || !editorRef.backgroundColor) return;

    const updateDataURL = () => {
      const dataURL = editorRef.toDataURL({
        format: 'png',
        quality: 1,
        multiplier: 1,
      });
      setDataURL(dataURL);
    };

    editorRef.on('object:added', updateDataURL);
    editorRef.on('object:modified', updateDataURL);
    editorRef.on('object:removed', updateDataURL);

    return () => {
      editorRef.off('object:added', updateDataURL);
      editorRef.off('object:modified', updateDataURL);
      editorRef.off('object:removed', updateDataURL);
    };
  }, [editorRef]);

  const handleSavePage = () => {
    saveCurrentPage();
  }
  const handleNextPage = () => {
    handleSavePage();
    setCurrentPage(Math.min(currentPage + 1, pages.length - 1));
  }
  const handlePreviousPage = () => {
    handleSavePage();
    setCurrentPage(Math.max(currentPage - 1, 0));
  }

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
            <div className="border cursor-pointer overflow-hidden w-16 h-20 md:w-20 md:h-28 border-gray-300 shrink-0">
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

          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 max-w-max! pl-1!">
              <div
                className={`border cursor-pointer overflow-hidden w-16 h-20  md:w-20 md:h-28 shrink-0 ${index === activeIndex ? "border-primary" : "border-gray-300"}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {!!dataURL && (
                    <Image
                      src={dataURL}
                      alt={'Template preview'}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}

          <CarouselItem className="basis-1/3 max-w-max! pl-1!">
            <div className="border cursor-pointer overflow-hidden w-16 h-20  md:w-20 md:h-28 border-gray-300 shrink-0">
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

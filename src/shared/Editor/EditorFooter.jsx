'use client'

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import CardBackPage from "@/components/common/CardBackPage/CardBackPage";
import { Button } from "@/components/ui/button"; // Shadcn Button

const EditorFooter = () => {
  const { selectedTemplate } = useEditorTemplateStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTemplate = () => setActiveIndex((prev) => (prev === 0 ? 2 - 1 : prev - 1));
  const nextTemplate = () => setActiveIndex((prev) => (prev === 2 - 1 ? 0 : prev + 1));

  return (
    <div className="flex items-center justify-center p-2 bg-white overflow-x-auto no-scrollbar">

      {/* Previous Template Button - Hidden on mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevTemplate}
        className="p-2 hidden sm:flex"
      >
        <ChevronLeft />
      </Button>

      {/* All Pages Container */}
      <div className="flex gap-0 md:gap-2">

        {/* Front Page */}
        <div className="border cursor-pointer overflow-hidden w-16 h-20 md:w-20 md:h-28 border-gray-300 shrink-0">
          <div className="relative w-full h-full overflow-hidden">
            {!!selectedTemplate && (
              <Image
                src={selectedTemplate?.src}
                alt={selectedTemplate?.title || 'Template image'}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Middle Pages - Scrollable with max width */}
        <div className="flex gap-0 overflow-x-auto max-w-[600px] sm:max-w-[500px] md:max-w-[700px] no-scrollbar">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={`border cursor-pointer overflow-hidden w-16 h-20  md:w-20 md:h-28 shrink-0 ${i === activeIndex ? "border-primary" : "border-gray-300"}`}
              onClick={() => setActiveIndex(i)}
            >
            </div>
          ))}
        </div>

        {/* Back Page */}
        <div className="border cursor-pointer overflow-hidden w-16 h-20  md:w-20 md:h-28 border-gray-300 shrink-0">
          <CardBackPage />
        </div>

      </div>

      {/* Next Template Button - Hidden on mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={nextTemplate}
        className="p-2 hidden sm:flex"
      >
        <ChevronRight />
      </Button>

    </div>
  );
};

export default EditorFooter;

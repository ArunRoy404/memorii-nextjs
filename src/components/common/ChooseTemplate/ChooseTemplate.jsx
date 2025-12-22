'use client'

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import sizes from "@/data/templateSizes";
import { useTemplateStore } from "@/store/useTemplateStore";
import CardBackPage from "../CardBackPage/CardBackPage";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEditorStore } from "@/store/useEditorStore";
import { useTextObjectStore } from "@/store/useTextObjectStore";


export default function ChooseTemplate() {
    const { resetEditorStore } = useEditorStore()
    const { setSelectedTemplate: selectTemplateForEdit } = useEditorTemplateStore()
    const { selectedTemplate, resetTemplateStore, setSelectedTemplate } = useTemplateStore()
    const { resetTextObjectStore } = useTextObjectStore()

    const [selectedSize, setSelectedSize] = useState(1);
    const router = useRouter()

    
    const handleSelectTemplate = () => {
        localStorage.removeItem('card-type-store')
        localStorage.removeItem('editor-storage')
        localStorage.removeItem('editor-template-storage')
        localStorage.removeItem('text-object')


        setSelectedTemplate(null)
        selectTemplateForEdit(selectedTemplate)
        resetEditorStore()
        resetTextObjectStore()
        toast.success("Template Selected")
        router.push(`/editor/${selectedTemplate?.id}`)
    }
    return (
        <Dialog open={selectedTemplate !== null} onOpenChange={() => resetTemplateStore()}>
            <DialogContent className="w-[95vw] max-w-[1200px]! max-h-[95vh] overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-4">

                        {/* MAIN IMAGE (BIG ON ALL DEVICES) */}
                        <div className="bg-gray-200 rounded-xl p-3 sm:p-4 flex items-center flex-1 justify-center">
                            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]  overflow-hidden rounded-lg">
                                {
                                    !!selectedTemplate && (
                                        <Image
                                            src={selectedTemplate?.src}
                                            alt={selectedTemplate?.title || 'Template image'}
                                            className=""
                                        />
                                    )
                                }
                            </div>
                        </div>



                        {/* SMALL CAROUSEL */}
                        <Carousel className="w-full max-w-[380px] mx-auto">
                            <CarouselContent>
                                {[...new Array(4)].map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/3"
                                    >
                                        <Card className="border-none bg-gray-200 p-2 lg:p-4">
                                            <CardContent className="p-0 flex items-center justify-center">
                                                {
                                                    index === 0 ? (
                                                        <div className="relative w-full h-full flex items-center justify-center rounded-md overflow-hidden">
                                                            {
                                                                !!selectedTemplate && (
                                                                    <Image
                                                                        src={selectedTemplate?.src}
                                                                        alt={selectedTemplate?.title || 'Template image'}

                                                                    />
                                                                )
                                                            }
                                                        </div>
                                                    ) : index === 3 ? (
                                                        <div className="relative w-full h-full flex items-center justify-center rounded-md overflow-hidden">
                                                            {
                                                                !!selectedTemplate && (
                                                                    <div
                                                                        className="bg-white relative max-h-max"
                                                                    >
                                                                        <Image
                                                                            src={selectedTemplate?.src}
                                                                            alt={selectedTemplate?.title || 'Template image'}
                                                                            className="opacity-0"
                                                                        />
                                                                        <CardBackPage className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    ) : (
                                                        <div className="relative w-full h-full flex items-center justify-center rounded-md overflow-hidden">
                                                            {
                                                                !!selectedTemplate && (
                                                                    <div
                                                                        className="bg-white"
                                                                    >
                                                                        <Image
                                                                            src={selectedTemplate?.src}
                                                                            alt={selectedTemplate?.title || 'Template image'}
                                                                            className="opacity-0 "
                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="-left-3 scale-75" />
                            <CarouselNext className="-right-3 scale-75" />
                        </Carousel>
                    </div>




                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col justify-between gap-6 px-2 sm:px-4">

                        <div>
                            <DialogHeader>
                                <DialogTitle className="text-lg sm:text-xl md:text-2xl">
                                    Select Size
                                </DialogTitle>
                            </DialogHeader>

                            {/* SIZE OPTIONS - RESPONSIVE */}
                            <div className="mt-4 grid grid-cols-1 gap-3">
                                {sizes.map((size) => (
                                    <div
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition flex justify-between items-center gap-3 ${selectedSize === size.id
                                            ? "border-primary bg-[#EDFEFF]"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">

                                            {/* RADIO */}
                                            <div className="mt-1 w-4 h-4 rounded-full border flex items-center justify-center">
                                                {selectedSize === size.id && (
                                                    <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                                                )}
                                            </div>

                                            <div className="space-y-1">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold">
                                                    {size.type}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500">
                                                    {size.limit}
                                                </p>
                                                <p className="text-sm sm:text-base font-semibold">
                                                    £ {size.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        {/* BUTTON */}
                        <Button
                            onClick={handleSelectTemplate}
                            className="w-full h-11 sm:h-12 text-sm sm:text-base">
                            Personalize
                        </Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

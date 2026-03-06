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
import { useTemplateStore } from "@/store/useTemplateStore";
import CardBackPage from "../CardBackPage/CardBackPage";
import { toast } from "sonner";
import { useEditorStore } from "@/store/useEditorStore";
import { useGetPricePlan } from "@/hooks/pricePlan.hook";
import { useCreateECard } from "@/hooks/ECard/e-card.hook";



export default function ChooseTemplate() {
    const { data: pricePlan } = useGetPricePlan()
    const { resetEditorStore } = useEditorStore()
    const { selectedTemplate, resetTemplateStore } = useTemplateStore()
    const [selectedSize, setSelectedSize] = useState(1);


    const { mutateAsync: createECard, isPending } = useCreateECard()
    const template_id = selectedTemplate?.id
    const image = selectedTemplate?.image
    const plan_id = selectedSize


    const handleSelectTemplate = () => {
        localStorage.removeItem('editor-storage')
        localStorage.removeItem('editor-template-storage')
        localStorage.removeItem('text-object')
        resetEditorStore()


        const payload = {
            template_id,
            plan_id,
            pages: [{}]
        };

        createECard(payload);
    }
    return (
        <Dialog open={selectedTemplate !== null} onOpenChange={() => resetTemplateStore()}>
            <DialogContent data-lenis-prevent className="w-[95vw] max-w-[1200px]! max-h-[80vh] overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-4">

                        {/* MAIN IMAGE (BIG ON ALL DEVICES) */}
                        <div className="bg-gray-200 rounded-xl p-3 sm:p-4 flex items-center flex-1 justify-center">
                            <div className="relative w-full aspect-3/4 max-w-[320px] sm:max-w-[380px] md:max-w-[420px] overflow-hidden rounded-lg">
                                {!!selectedTemplate && (
                                    <Image
                                        src={image}
                                        alt={selectedTemplate?.title || 'Template image'}
                                        fill
                                        className="object-cover"
                                    />
                                )}
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
                                            <CardContent className="p-0 flex items-center justify-center overflow-hidden">
                                                <div className="relative w-full aspect-3/4 rounded-md overflow-hidden bg-white">
                                                    {index === 0 ? (
                                                        <>
                                                            {!!selectedTemplate && (
                                                                <Image
                                                                    src={image}
                                                                    alt={selectedTemplate?.title || 'Template image'}
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            )}
                                                        </>
                                                    ) : index === 3 ? (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            {!!selectedTemplate && (
                                                                <Image
                                                                    src={image}
                                                                    alt="Back filler"
                                                                    fill
                                                                    className="opacity-0 pointer-events-none"
                                                                />
                                                            )}
                                                            <CardBackPage className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full' />
                                                        </div>
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            {!!selectedTemplate && (
                                                                <Image
                                                                    src={image}
                                                                    alt="Template filler"
                                                                    fill
                                                                    className="opacity-0 pointer-events-none"
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
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
                                {pricePlan?.map((plan) => {

                                    if (plan?.status === 'deactive') return null;

                                    return (
                                        <div
                                            key={plan.id}
                                            onClick={() => setSelectedSize(plan.id)}
                                            className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition flex justify-between items-center gap-3 ${selectedSize === plan.id
                                                ? "border-primary bg-[#EDFEFF]"
                                                : "border-gray-200"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">

                                                {/* RADIO */}
                                                <div className="mt-1 w-4 h-4 rounded-full border flex items-center justify-center">
                                                    {selectedSize === plan.id && (
                                                        <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                                                    )}
                                                </div>

                                                <div className="space-y-1">
                                                    <p className="text-sm sm:text-base md:text-lg font-semibold">
                                                        {plan?.plan}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                        {plan?.size} pages {" "}
                                                        ({plan?.inviteable ? 'with inviteable' : 'without inviteable'})
                                                    </p>
                                                    <p className="text-sm sm:text-base font-semibold">
                                                        £ {plan?.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>



                        {/* BUTTON */}
                        <Button
                            onClick={handleSelectTemplate}
                            isLoading={isPending}
                            className="w-full h-11 sm:h-12 text-sm sm:text-base">
                            Personalize
                        </Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

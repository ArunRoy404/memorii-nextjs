'use client'

import birthdayTemplate2 from "@/assets/templateImages/birthdayTemplate2.png";
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

const templates = [
    birthdayTemplate2,
    birthdayTemplate2,
    birthdayTemplate2,
    birthdayTemplate2,
    birthdayTemplate2,
];


export default function ChooseTemplate({ open = true, setOpen }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(1);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[95vw] max-w-[1200px]! max-h-[95vh] overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-4">

                        {/* MAIN IMAGE (BIG ON ALL DEVICES) */}
                        <div className="bg-gray-200 rounded-xl p-3 sm:p-4 flex items-center justify-center">
                            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-3/4 overflow-hidden rounded-lg">
                                <Image
                                    src={templates[activeIndex]}
                                    alt="Template"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>



                        {/* SMALL CAROUSEL */}
                        <Carousel className="w-full max-w-[380px] mx-auto">
                            <CarouselContent>
                                {templates.map((item, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/3"
                                    >
                                        <Card className="border-none bg-gray-200 p-2">
                                            <CardContent className="p-0 flex aspect-3/4 items-center justify-center">
                                                <div className="relative w-full h-full rounded-md overflow-hidden bg-white">
                                                    <Image
                                                        src={item}
                                                        alt="Template"
                                                        fill
                                                        className="object-cover"
                                                    />
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
                        <Button className="w-full h-11 sm:h-12 text-sm sm:text-base">
                            Personalize
                        </Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

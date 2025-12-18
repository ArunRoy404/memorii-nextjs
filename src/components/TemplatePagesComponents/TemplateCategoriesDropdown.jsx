'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import templatesCategory, { occasions } from "@/data/templateCategories";
import { useCardTypeStore } from "@/store/useCardTypeStore";


const TemplateCategoriesDropdown = () => {
    const { setCardType } = useCardTypeStore();
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedOccasion, setSelectedOccasion] = useState();

    useEffect(() => {
        setCardType(selectedCategory);
    }, [selectedCategory, setCardType])


    return (
        <div className="mx-auto max-w-max mb-20 flex flex-col lg:flex-row gap-4 md:gap-4 items-center">

            <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full md:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger
                        className='text-subtitle font-semibold min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100 p-6'
                    >
                        <SelectValue placeholder="Templates" />
                    </SelectTrigger>

                    <SelectContent
                        data-lenis-prevent
                        className='rounded-2xl'
                    >
                        {templatesCategory?.map((template) => (
                            <SelectItem
                                key={template?.key}
                                value={template?.key}
                                className='my-4 w-[90%] mx-auto text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                            >
                                {template?.category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>


                <Select
                    disabled={!selectedCategory}
                    value={selectedOccasion} onValueChange={setSelectedOccasion}>
                    <SelectTrigger
                        className='text-subtitle font-semibold min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100 p-6'
                    >
                        <SelectValue placeholder="Occasions" />
                    </SelectTrigger>

                    <SelectContent
                        data-lenis-prevent
                        className='rounded-2xl'
                    >
                        {occasions[selectedCategory]?.map((occasion) => (
                            <SelectItem
                                key={occasion?.key}
                                value={occasion?.key}
                                className='my-4 w-[90%] mx-auto text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                            >
                                {occasion?.occasion}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>


            <Button
                className='w-full lg:w-auto'
                variant='defaultShiny'>
                Start a blank template
            </Button>
        </div>
    );
};

export default TemplateCategoriesDropdown;

'use client'

import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useCardTypeStore } from "@/store/useCardTypeStore";
import { useGetCategories } from "@/hooks/templates.hook";
import { useRouter, useSearchParams } from "next/navigation";


const TemplateCategoriesDropdown = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { data: categoriesData } = useGetCategories();
    const { setCardType } = useCardTypeStore();
    const selectedCategory = searchParams.get('category') || '';
    const selectedOccasion = searchParams.get('occasion') || '';

    const handleCategoryChange = (val) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', val);
        params.delete('occasion');
        params.set('page', '1');
        router.push(`?${params.toString()}`);
    };

    const handleOccasionChange = (val) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('occasion', val);
        params.set('page', '1');
        router.push(`?${params.toString()}`);
    };


    const categories = categoriesData?.category;
    const occasions = categoriesData?.template
    const filteredOccasions = occasions?.[selectedCategory]


    useEffect(() => {
        setCardType(selectedCategory);
    }, [selectedCategory, setCardType])


    return (
        <div className="mx-auto max-w-max mb-20 flex flex-col lg:flex-row gap-4 md:gap-4 items-center">

            <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full md:w-auto">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger
                        className='text-subtitle font-semibold min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100 p-6'
                    >
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>

                    <SelectContent
                        data-lenis-prevent
                        className='rounded-2xl'
                    >
                        {categories?.map((category, index) => (
                            <SelectItem
                                key={index}
                                value={category}
                                className='my-4 w-[90%] mx-auto text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                            >
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>


                <Select
                    disabled={!selectedCategory}
                    value={selectedOccasion} onValueChange={handleOccasionChange}>
                    <SelectTrigger
                        className='text-subtitle font-semibold min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100 p-6'
                    >
                        <SelectValue placeholder="Occasions" />
                    </SelectTrigger>

                    <SelectContent
                        data-lenis-prevent
                        className='rounded-2xl'
                    >
                        {filteredOccasions?.map((occasion) => (
                            <SelectItem
                                key={occasion?.id}
                                value={occasion?.name}
                                className='my-4 w-[90%] mx-auto text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                            >
                                {occasion?.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default TemplateCategoriesDropdown;

'use client'

import CardOptions from '@/components/EditorComponents/CardOptions';
import { DiscardEditsDialog } from '@/components/EditorComponents/DiscardEditsDialog';
import { useEditorStore } from '@/store/useEditorStore';
import { LayoutPanelLeft, Type } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CardEditorPage = () => {
    const { selectedTemplate } = useEditorStore();


    return (
        <div
            className='container mx-auto px-4 lg:px-0 h-full flex items-center justify-center'
        >
            <div
                className='flex gap-10 w-full'
            >
                {/* template front  */}
                <div className="relative w-[500px] aspect-3/4">
                    {
                        !!selectedTemplate && (
                            <Image
                                src={selectedTemplate?.src}
                                alt={selectedTemplate?.title || 'Template image'}
                                fill
                                className="object-cover"
                            />
                        )
                    }
                </div>


                {/* options  */}
                <CardOptions />



                {/* page and text options  */}
                <div
                    className='bg-[#F9FAFB] flex w-full flex-1 aspect-6/4'
                >
                    <div
                        className='w-1/2 aspect-3/4'
                    ></div>
                    <div
                        className='bg-white w-1/2 aspect-3/4 grid grid-cols-1'
                    >
                        <div
                            className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
                        >
                            <Type />
                            <p>Add Text</p>
                        </div>
                        <div
                            className='border border-dashed cursor-pointer text-center flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
                        >
                            <p>Happy Birthday! <br />
                                I Hope You Have a Great Day</p>
                        </div>
                        <div
                            className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
                        >
                            <Type />
                            <p>Add Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEditorPage;
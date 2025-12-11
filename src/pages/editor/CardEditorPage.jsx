'use client'

import CardOptions from '@/components/EditorComponents/CardOptions';
import CardEditor from '@/components/EditorComponents/Editor/CardEditor';
import CardTextInsert from '@/components/EditorComponents/Editor/CardTextInsert';
import { useEditorTemplateStore } from '@/store/useEditorTemplateStore';
import { Type } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CardEditorPage = () => {
    const { selectedTemplate } = useEditorTemplateStore();


    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;



    return (
        <div
            className='container mx-auto px-4 lg:px-0 h-full flex items-center justify-center'
        >
            <div
                className='flex gap-10 w-full'
            >
                {/* template front  */}
                <div className="relative"
                    style={{ width, height }}
                >
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
                    className='bg-[#F9FAFB] flex w-full flex-1 max-h-max'
                >
                    {/* editor  */}
                    {/* <div
                        className='w-1/2 aspect-3/4'
                    ></div> */}
                    <CardEditor />

                    {/* add text options  */}
                    <CardTextInsert />
                </div>
            </div>
        </div>
    );
};

export default CardEditorPage;
'use client'

import CardOptions from '@/components/EditorComponents/CardOptions';
import CardEditor from '@/components/EditorComponents/Editor/CardEditor';
import { useEditorStore } from '@/store/useEditorStore';
import { useEditorTemplateStore } from '@/store/useEditorTemplateStore';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CardEditorPage = () => {
    const { selectedTemplate } = useEditorTemplateStore();
    const { addPage } = useEditorStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;

    const aspectRatio = width / height;


    return (
        <div
            className='container mx-auto px-4 lg:px-0 h-full flex items-center justify-center'
        >
            <div
                className='space-y-2'
            >
                <div
                    className='flex gap-10 mx-auto'
                >
                    {/* template front  */}
                    <div className={`relative max-w-[500px]`}
                        style={{ width, aspectRatio }}
                    >
                        {
                            !!selectedTemplate && (
                                <Image
                                    src={selectedTemplate?.src}
                                    alt={selectedTemplate?.title || 'Template image'}
                                    fill
                                // className="object-cover"
                                />
                            )
                        }
                    </div>


                    {/* options  */}
                    <CardOptions />



                    {/* page and text options  */}
                    <div
                        className='flex max-h-max'
                    >
                        {/* editor  */}
                        {/* <div
                        className='w-1/2 aspect-3/4'
                    ></div> */}
                        <CardEditor />

                        {/* add text options  */}
                        {/* <CardTextInsert /> */}
                    </div>
                </div>


                <div
                    onClick={() => addPage()}
                    className='flex items-center gap-2 w-full justify-center border-2 rounded-full py-2 cursor-pointer'
                >
                    <Plus />
                    <p>Add Page</p>
                </div>
            </div>
        </div>
    );
};

export default CardEditorPage;
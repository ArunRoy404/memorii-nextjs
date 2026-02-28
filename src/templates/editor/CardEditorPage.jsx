'use client'

import Loader from '@/components/common/Loader/Loader';
import CardOptions from '@/components/EditorComponents/CardOptions';
import CardEditor from '@/components/EditorComponents/Editor/CardEditor';
import { useGetECard } from '@/hooks/ECard/e-card.hook';
import { useEditorStore } from '@/store/useEditorStore';
import Image from 'next/image';
import React, { useEffect } from 'react';



const CardEditorPage = ({ templateId }) => {

    const { isTemplateLoading, setIsTemplateLoading } = useEditorStore()
    const { data: eCard, isLoading } = useGetECard(templateId);


    useEffect(() => {
        if (!isLoading && !!eCard) {
            setIsTemplateLoading(false)
        }
    }, [isLoading, setIsTemplateLoading, eCard])

    if (isTemplateLoading) return <Loader />

    return (
        <div
            className='container mx-auto px-4 lg:px-0 h-full flex items-center justify-center'
        >
            <div
                className='flex gap-10 mx-auto'
            >
                {/* template front  */}
                <div className={`hidden xl:block relative max-w-[500px]`}
                >
                    {/* {
                        !!selectedTemplate && (
                            <Image
                                src={selectedTemplate?.src}
                                alt={selectedTemplate?.title || 'Template image'}
                                fill
                            />
                        )
                    } */}
                </div>



                {/* options  */}
                <div className='hidden md:block'>
                    <CardOptions />
                </div>



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
        </div>
    );
};

export default CardEditorPage;
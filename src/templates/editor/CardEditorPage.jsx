'use client'

import Loader from '@/components/common/Loader/Loader';
import CardOptions from '@/components/EditorComponents/CardOptions';
import CardEditor from '@/components/EditorComponents/Editor/CardEditor';
import { useGetECard } from '@/hooks/ECard/e-card.hook';
import { useEditorStore } from '@/store/useEditorStore';
import Image from 'next/image';
import React, { useEffect } from 'react';



const CardEditorPage = ({ templateId }) => {
    const { isTemplateLoading, setIsTemplateLoading, setPages, setFrontPage } = useEditorStore()
    const { data, isLoading } = useGetECard(templateId);
    const frontPage = data?.ecard?.template?.image
    const eCardPages = data?.ecard?.pages || [null]

    useEffect(() => {
        if (!isLoading && !!data) {
            setFrontPage(frontPage)
            setIsTemplateLoading(false)
            setPages(eCardPages || [null])
        }
    }, [isLoading, setIsTemplateLoading, data, setPages])

    if (isTemplateLoading) return <Loader />


    return (
        <div
            className='container mx-auto px-4 lg:px-0 h-full flex items-center justify-center'
        >
            <div
                className='flex gap-10 mx-auto'
            >
                {/* template front  */}
                <div className={`hidden xl:block relative max-w-[500px] w-[500px]`}
                >
                    {
                        !!frontPage && (
                            <Image
                                src={frontPage}
                                alt={'Template image'}
                                fill
                            />
                        )
                    }
                </div>



                {/* options  */}
                <div className='hidden md:block'>
                    <CardOptions />
                </div>



                <div
                    className='flex max-h-max'
                >
                    {/* editor  */}
                    <CardEditor />
                </div>
            </div>
        </div>
    );
};

export default CardEditorPage;
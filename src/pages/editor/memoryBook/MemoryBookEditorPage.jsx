'use client'

import MemoryEditor from '@/components/EditorComponents/Editor/MemoryEditor';
import { useEditorTemplateStore } from '@/store/useEditorTemplateStore';
import React from 'react';

const MemoryBookEditorPage = () => {
    const { selectedTemplate } = useEditorTemplateStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;

    const aspectRatio = width / height;


    return (
        <div
            className='container mx-auto px-4 lg:px-0 py-10 flex items-center justify-center'
        >
            <div
                className='flex gap-10'
            >
                <MemoryEditor />
            </div>
        </div>
    );
};


export default MemoryBookEditorPage;
'use client'

import CardEditorPage from '@/pages/editor/CardEditorPage';
import MemoryBookPage from '@/pages/editor/memoryBook/MemoryBookEditorPage';
import { useCardTypeStore } from '@/store/useCardTypeStore';
import React from 'react';

const EditTemplate = () => {
    const { cardType } = useCardTypeStore();
    return (
        <>
            {
                cardType === 'eCard'
                    ? <CardEditorPage />
                    : <MemoryBookPage />
            }
        </>
    );
};

export default EditTemplate;
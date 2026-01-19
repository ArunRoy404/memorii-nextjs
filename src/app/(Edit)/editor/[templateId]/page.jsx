'use client'

import CardEditorPage from '@/templates/editor/CardEditorPage';
import MemoryBookPage from '@/templates/editor/memoryBook/MemoryBookEditorPage';
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
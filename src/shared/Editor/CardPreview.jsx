import { useEditorStore } from '@/store/useEditorStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as fabric from "fabric";


const CardPreview = ({ index }) => {
    const { currentPage, pages, editorRef } = useEditorStore()
    const [dataURL, setDataURL] = useState(null)
    const pageContent = pages[index];


    useEffect(() => {
        if (currentPage !== index) return

        if (!editorRef) return;

        const updateDataURL = () => {
            const dataURL = editorRef.toDataURL({
                format: 'png',
                quality: 1,
                multiplier: 1,
            });
            setDataURL(dataURL);
        };

        editorRef.on('object:added', updateDataURL);
        editorRef.on('object:modified', updateDataURL);
        editorRef.on('object:removed', updateDataURL);

        return () => {
            editorRef.off('object:added', updateDataURL);
            editorRef.off('object:modified', updateDataURL);
            editorRef.off('object:removed', updateDataURL);
        };
    }, [editorRef, currentPage, index]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {!!dataURL && (
                <Image
                    src={dataURL}
                    alt={'Template preview'}
                    fill
                    className="object-cover"
                />
            )}
        </div>
    );
};

export default CardPreview;
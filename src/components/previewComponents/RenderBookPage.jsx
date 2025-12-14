import { useEditorStore } from '@/store/useEditorStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createDataURL } from '@/services/createDataURL';


const RenderBookPAge = ({ index }) => {
    const { currentPage, editorRef } = useEditorStore()
    const [dataURL, setDataURL] = useState(null)

    useEffect(() => {
        if (currentPage !== index) return

        if (!editorRef || !editorRef.backgroundColor) return;

        const updateDataURL = () => {
            const dataURL = createDataURL(editorRef)
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


    console.log('dataURL, currentPage, index, editorRef', dataURL, currentPage, index, editorRef);

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

export default RenderBookPAge;
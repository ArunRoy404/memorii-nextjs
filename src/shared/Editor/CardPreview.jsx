import { useEditorStore } from '@/store/useEditorStore';
import Image from 'next/image';
import { useEffect, useMemo, useState, useRef } from 'react';
import { createDataURL } from '@/services/createDataURL';
import * as fabric from 'fabric';

const CardPreview = ({ pageData, index }) => {
    const { currentPage, editorRef } = useEditorStore();
    const [dataURL, setDataURL] = useState(null);
    const hasGenerated = useRef(false);



    const canvas = useMemo(() => new fabric.Canvas(null, {
        width: pageData?.width || 1800,
        height: pageData?.height || 2400,
    }), [pageData?.width, pageData?.height]);



    // Non-active page: render once from JSON
    useEffect(() => {
        if (currentPage === index) return;
        if (hasGenerated.current) return;
        if (!pageData || !canvas) return;

        const render = async () => {
            try {
                const patchedPage = {
                    ...pageData,
                    objects: (pageData.objects || []).map(obj => ({
                        ...obj,
                        type: obj.type === 'IText' ? 'i-text' : obj.type.toLowerCase()
                    }))
                };

                await canvas.loadFromJSON(patchedPage);

                if (document.fonts) await document.fonts.ready;

                canvas.renderAll();

                const url = canvas.toDataURL({ format: 'png', quality: 1 });
                setDataURL(url);
                hasGenerated.current = true;
            } catch (err) {
                console.error('CardPreview render error:', err);
            }
        };

        render();
    }, [currentPage, index, pageData, canvas]);




    // Active page: listen to live editor events
    useEffect(() => {
        if (currentPage !== index) return;
        if (!editorRef || !editorRef.backgroundColor) return;

        const updateDataURL = () => setDataURL(createDataURL(editorRef));

        updateDataURL();

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
            {!!dataURL
                ? <Image src={dataURL} alt="Template preview" fill className="object-cover" />
                : <div className="bg-white w-full h-full" />
            }
        </div>
    );
};

export default CardPreview;
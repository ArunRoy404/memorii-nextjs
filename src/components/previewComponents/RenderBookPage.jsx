import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import * as fabric from 'fabric'

import { useEditorTemplateStore } from '@/store/useEditorTemplateStore';

const RenderBookPage = ({ page, width: w, height: h }) => {
    const { selectedTemplate } = useEditorTemplateStore()
    const [dataURL, setDataURL] = useState(null)

    let width = w || selectedTemplate?.src?.width;
    let height = h || selectedTemplate?.src?.height;

    // 1. Initialize the canvas only once
    const canvas = useMemo(() => new fabric.Canvas(null, {
        width: width,
        height: height,
    }), [width, height]);

    if (page) {
        canvas.clear();
        canvas.loadFromJSON(page);
        canvas.renderAll();
    }

    

    useEffect(() => {
        const renderCanvas = async () => {
            if (!page || !canvas) return;

            // Ensure the type is correct for v6
            const patchedPage = {
                ...page,
                objects: page.objects.map(obj => ({
                    ...obj,
                    type: obj.type === 'IText' ? 'i-text' : obj.type.toLowerCase()
                }))
            };

            try {
                await canvas.loadFromJSON(patchedPage);

                // Wait for fonts if any
                if (document.fonts) {
                    await document.fonts.ready;
                }

                canvas.renderAll();

                const dataUrl = canvas.toDataURL({
                    format: 'png',
                    quality: 1,
                });

                setDataURL(dataUrl);
            } catch (err) {
                console.error("Fabric Load Error:", err);
            }
        };

        renderCanvas();
    }, [page, canvas]);



    console.log('page', page);



    return (
        <div className='w-full h-full relative'>
            {!!dataURL
                ? (
                    <Image
                        src={dataURL}
                        alt={'Template preview'}
                        fill
                        className="object-cover"
                    />
                )
                : (
                    <div className='bg-white w-full h-full' />
                )
            }
        </div>
    );
};

export default RenderBookPage;
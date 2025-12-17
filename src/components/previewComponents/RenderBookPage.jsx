import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import * as fabric from 'fabric'
import { useEditorTemplateStore } from '@/store/useEditorTemplateStore';

const RenderBookPage = ({ page }) => {
    const { selectedTemplate } = useEditorTemplateStore()
    const [dataURL, setDataURL] = useState(null)

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;

    const canvas = useMemo(() => new fabric.Canvas(null, {
        width: width,
        height: height,
    }), [width, height])
    if (page) canvas.loadFromJSON(page)


    useEffect(() => {
        if (!page || !canvas?.backgroundColor) return;

        const dataUrl = canvas.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 1,
        })
        setDataURL(dataUrl);
    }, [page, canvas])



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
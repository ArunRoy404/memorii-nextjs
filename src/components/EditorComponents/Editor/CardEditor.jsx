'use client';

import '@/lib/fabricSetup';
import { fabric } from '@/lib/fabricSetup';
import { applyCommonStyles } from "@/services/CommonControlStyle";
import { handleDeleteObject, handleRemoveEmptyText, handleRemovePreAddedText, handleRemoveText, initClipboard, memoryImageUpload, setObjProperties, touchToText } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import { useEffect, useRef, useState } from "react";



const CardEditor = () => {
    const [uploadTarget, setUploadTarget] = useState(null);
    const { editorRef, setEditorRef, pages, currentPage } = useEditorStore()

    const containerRef = useRef(null);
    const fileInputRef = useRef(null);


    const width = 1800
    const height = 2400
    const aspectRatio = width / height;



    const handleMemoryImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file || !uploadTarget) return;

        memoryImageUpload({ file, labelObj: uploadTarget, setUploadTarget, editorRef, fileInputRef });

        setUploadTarget(null);
        e.target.value = '';
    };



    const renderDesign = async (ref) => {
        const pageData = pages[currentPage]?.page_data
        const pageJson = (pageData && Object.keys(pageData).length > 0)
            ? pageData
            : null;
        if (!pageJson) return
        await ref?.loadFromJSON(pageJson);


        ref?.getObjects()?.forEach(obj => {
            applyCommonStyles(obj)
            setObjProperties({ obj: obj, fileInputRef })


            if (obj.isMemoryImageUpload) {
                if (fileInputRef && fileInputRef.current) {
                    obj.on('mousedown', () => {
                        if (fileInputRef.current) {
                            setUploadTarget(obj);
                            fileInputRef.current.click();
                        }
                    });
                }
            }
        });


        if (pageJson.layout) {
            ref.setLayout(pageJson.layout || 'blank');

            if (pageJson.layout !== 'blank') {
                ref.setSelection(false)
            }
        }
        ref?.renderAll();
    }



    useEffect(() => {
        if (!width || !height) return

        const fabricCanvas = new fabric.Canvas('canvas', {
            enableRetinaScaling: true,
            preserveObjectStacking: true,
            width,
            height,
            backgroundColor: 'white',
            backgroundImage: null,
            layout: 'blank',
            selection: true,
            selectionColor: '#08A2A620',
            selectionBorderColor: '#08A2A650',
            selectionLineWidth: 2,
        })

        fabricCanvas.setLayout = (newLayout) => { fabricCanvas.layout = newLayout }
        fabricCanvas.getLayout = () => { return fabricCanvas.layout }
        fabricCanvas.setBackgroundColor = (newColor) => { fabricCanvas.backgroundColor = newColor }
        fabricCanvas.setSelection = (newSelection) => { fabricCanvas.selection = newSelection }


        touchToText({ ref: fabricCanvas })
        setEditorRef(fabricCanvas);
        renderDesign(fabricCanvas);

        const handleRemove = (e) => handleRemoveText({ e, ref: fabricCanvas })
        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        const removeClipboardListeners = initClipboard(fabricCanvas);
        const cleanupEmptyText = handleRemoveEmptyText({ ref: fabricCanvas });
        const cleanupPreAdded = handleRemovePreAddedText({ ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);
        window.addEventListener("keydown", handleRemove);



        return () => {
            window.removeEventListener("keydown", handleDelete);
            window.removeEventListener("keydown", handleRemove);
            removeClipboardListeners();
            cleanupEmptyText();
            cleanupPreAdded();
            fabricCanvas.dispose();
        }
    }, [currentPage])



    const resizeCanvas = () => {
        // Check if the actual Fabric DOM elements are ready
        if (!editorRef || !editorRef.lowerCanvasEl || !containerRef.current) return;

        const parentWidth = containerRef.current.clientWidth;
        const scale = parentWidth / width;

        editorRef.setDimensions({
            width: width * scale,
            height: height * scale
        });
        editorRef.setZoom(scale);
        editorRef.requestRenderAll();
    };



    useEffect(() => {
        resizeCanvas();
    }, [width, height, editorRef]);



    return (
        <div ref={containerRef} className='max-w-[310px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] overflow-hidden'
            style={{ aspectRatio: aspectRatio }}
        >
            <canvas id="canvas" />
            {/* The Hidden Input */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleMemoryImageChange}
            />
        </div>
    );
};


export default CardEditor;
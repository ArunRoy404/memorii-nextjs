'use client';

import '@/lib/fabricSetup';
import { fabric } from '@/lib/fabricSetup';
import { applyCommonStyles } from "@/services/CommonControlStyle";
import { handleDeleteObject, handleRemoveEmptyText, handleRemovePreAddedText, handleRemoveText, initClipboard, setObjProperties, touchToText } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import { useEffect, useRef } from "react";



const MemoryEditor = () => {
    const { editorRef, setEditorRef, pages, currentPage } = useEditorStore()

    let width = 760;
    let height = Math.round(1.412 * width);
    const containerRef = useRef(null);
    const aspectRatio = width / height;


    const renderDesign = async (ref) => {
        const pageJson = pages[currentPage]
        if (!pageJson) return


        await ref?.loadFromJSON(pageJson);

        ref?.getObjects()?.forEach(obj => {
            applyCommonStyles(obj)
            setObjProperties({ obj: obj })
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
            width,
            height,
            backgroundColor: 'white',
            layout: 'blank',
            selection: true,
        })

        fabricCanvas.setLayout = (newLayout) => { fabricCanvas.layout = newLayout }
        fabricCanvas.getLayout = () => { return fabricCanvas.layout }
        fabricCanvas.setBackgroundColor = (newColor) => { fabricCanvas.backgroundColor = newColor }
        fabricCanvas.setSelection = (newSelection) => { fabricCanvas.selection = newSelection }


        touchToText({ ref: fabricCanvas })

        setEditorRef(fabricCanvas);
        renderDesign(fabricCanvas);

        const removeClipboardListeners = initClipboard(fabricCanvas);

        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        const handleRemove = (e) => handleRemoveText({ e, ref: fabricCanvas })
        const cleanupPreAdded = handleRemovePreAddedText({ ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);
        window.addEventListener("keydown", handleRemove);
        const cleanupEmptyText = handleRemoveEmptyText({ ref: fabricCanvas });



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
        <div ref={containerRef} className='max-w-[310px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[700px] overflow-hidden '
            style={{ aspectRatio: aspectRatio }}
        >
            <canvas id="canvas" />
        </div>
    );
};

export default MemoryEditor;
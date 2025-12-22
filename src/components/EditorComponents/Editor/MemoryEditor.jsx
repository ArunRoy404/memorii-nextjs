'use client'


import { applyCommonStyles } from "@/services/CommonControlStyle";
import { addText, doubleClickToText, handleDeleteObject, handleRemoveText } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";



const MemoryEditor = () => {
    const { setEditorRef, pages, currentPage } = useEditorStore()

    let width = 760;
    let height = 1080;
    const containerRef = useRef(null);

    const renderDesign = async (ref) => {
        if (pages[currentPage]) {
            await ref?.loadFromJSON(pages[currentPage]);
        }
        ref?.renderAll();
        ref?.getObjects()?.forEach(obj => applyCommonStyles(obj));
    }


    useEffect(() => {
        if (!width || !height) return

        const fabricCanvas = new fabric.Canvas('canvas', {
            enableRetinaScaling: true,
            width,
            height,
            backgroundColor: 'white',
            layout: 'blank',
        })

        fabricCanvas.setLayout = (newLayout) => { fabricCanvas.layout = newLayout }
        fabricCanvas.setBackgroundColor = (newColor) => { fabricCanvas.backgroundColor = newColor }


        setEditorRef(fabricCanvas);
        renderDesign(fabricCanvas);


        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        const handleRemove = (e) => handleRemoveText({ e, ref: fabricCanvas })
        const handleDoubleClick = () => doubleClickToText({ ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);
        window.addEventListener("keydown", handleRemove);
        window.addEventListener("dblclick", handleDoubleClick);



        return () => {
            window.removeEventListener("keydown", handleDelete);
            window.removeEventListener("keydown", handleRemove);
            window.removeEventListener("dblclick", handleDoubleClick);
            fabricCanvas.dispose();
        }
    }, [currentPage])


    return (
        <div ref={containerRef} className='overflow-hidden'
        >
            <canvas id="canvas" />
        </div>
    );
};

export default MemoryEditor;
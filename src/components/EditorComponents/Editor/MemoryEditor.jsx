'use client'


import { applyCommonStyles } from "@/services/CommonControlStyle";
import { addText, handleDeleteObject } from "@/services/Editor";
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
        window.addEventListener("keydown", handleDelete);

        // double click text
        // fabricCanvas.upperCanvasEl.addEventListener("dblclick", (e) => {
        //     const rect = fabricCanvas.upperCanvasEl.getBoundingClientRect();
        //     const x = e.clientX - rect.left;
        //     const y = e.clientY - rect.top;

        //     const text = new fabric.Textbox("New Text", {
        //         left: x,
        //         top: y,
        //         fontSize: 20,
        //         fill: "#000",
        //     });

        //     fabricCanvas.add(text);
        //     fabricCanvas.setActiveObject(text);
        //     text.enterEditing();
        // });

        return () => {
            window.removeEventListener("keydown", handleDelete);
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
'use client'


import { applyCommonStyles } from "@/services/CommonControlStyle";
import { handleDeleteObject, handleRemoveText } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

const CardEditor = () => {
    const { editorRef, setEditorRef, pages, currentPage } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;
    const containerRef = useRef(null);
    const aspectRatio = width / height;

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
        renderDesign(fabricCanvas)

        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        const handleRemove = (e) => handleRemoveText({ e, ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);
        window.addEventListener("keydown", handleRemove);

        return () => {
            window.removeEventListener("keydown", handleDelete);
            window.removeEventListener("keydown", handleRemove);
            fabricCanvas.dispose();
        }
    }, [width, height, currentPage])




    const resizeCanvas = () => {
        if (!containerRef.current || !editorRef?.backgroundColor) return;


        const parentWidth = containerRef.current.clientWidth;
        const parentHeight = containerRef.current.clientHeight;

        const scaleX = parentWidth / width;
        const scaleY = parentHeight / height;


        // Choose the smaller scale to fit inside parent
        const scale = Math.min(scaleX, scaleY);
        const editorWidth = width * scale;
        const editorHeight = height * scale;

        editorRef.setWidth(editorWidth);
        editorRef.setHeight(editorHeight);

        editorRef.setZoom(scale);
        editorRef.setViewportTransform([scale, 0, 0, scale, 0, 0]);
        editorRef.renderAll();
    };

    useEffect(() => {
        resizeCanvas();
    }, [width, height, editorRef]);


    return (
        <div ref={containerRef} className='max-w-[500px] overflow-hidden'
            style={{ aspectRatio: aspectRatio }}
        >
            <canvas id="canvas" />
        </div>
    );
};

export default CardEditor;
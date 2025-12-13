'use client'


import { applyCommonStyles } from "@/services/CommonControlStyle";
import { handleDeleteObject } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import * as fabric from "fabric";
import { useEffect } from "react";

const CardEditor = () => {
    const { setEditorRef, pages, currentPage } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;

    const renderDesign = async (ref) => {
        if (pages[currentPage]) {
            await ref.loadFromJSON(pages[currentPage]);
        }
        ref.renderAll();
        ref.getObjects().forEach(obj => applyCommonStyles(obj));
    }


    useEffect(() => {
        if (!width || !height) return

        const fabricCanvas = new fabric.Canvas('canvas', {
            width,
            height,
            backgroundColor: 'white',
            layout: 'blank'
        })

        fabricCanvas.setLayout = (newLayout) => { fabricCanvas.layout = newLayout }
        fabricCanvas.setBackgroundColor = (newColor) => { fabricCanvas.backgroundColor = newColor }


        setEditorRef(fabricCanvas);
        renderDesign(fabricCanvas)


        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);

        return () => {
            window.removeEventListener("keydown", handleDelete);
            fabricCanvas.dispose();
        }
    }, [width, height, currentPage])

    return (
        <div className=''>
            <canvas id="canvas" />
        </div>
    );
};

export default CardEditor;
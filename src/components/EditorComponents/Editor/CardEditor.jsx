'use client'
import { handleDeleteObject } from "@/services/Editor";
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

const CardEditor = () => {
    const { setEditorRef } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;


    useEffect(() => {
        if (!width || !height) return

        const fabricCanvas = new fabric.Canvas('canvas', {
            width,
            height,
            backgroundColor: 'white'
        })
        fabricCanvas.layout = 'blank'

        fabricCanvas.setLayout = (newLayout) => {
            fabricCanvas.layout = newLayout
        }
        fabricCanvas.setBackgroundColor = (newColor) => {
            fabricCanvas.backgroundColor = newColor
        }

        setEditorRef(fabricCanvas);
        fabricCanvas.renderAll();



        const handleDelete = (e) => handleDeleteObject({ e, ref: fabricCanvas })
        window.addEventListener("keydown", handleDelete);


        return () => {
            window.removeEventListener("keydown", handleDelete);
            fabricCanvas.dispose();
        }
    }, [width, height, setEditorRef])

    return (
        <div className=''>
            <canvas id="canvas" />
        </div>
    );
};

export default CardEditor;
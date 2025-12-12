'use client'
import { useEditorStore } from "@/store/useEditorStore";
import { useEditorTemplateStore } from "@/store/useEditorTemplateStore";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

const CardEditor = () => {
    const { setEditorRef } = useEditorStore()
    const { selectedTemplate } = useEditorTemplateStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;

    const canvasRef = useRef(null);


    useEffect(() => {
        if (!canvasRef.current || !width || !height) return

        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
            width,
            height,
            backgroundColor: 'white'
        })

        setEditorRef(fabricCanvas);
        fabricCanvas.renderAll();


        return () => fabricCanvas.dispose();
    }, [width, height, setEditorRef])

    return (
        <div className=''>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default CardEditor;
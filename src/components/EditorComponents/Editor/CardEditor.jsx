'use client'
import { useEditorStore } from "@/store/useEditorStore";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

const CardEditor = () => {
    const { selectedTemplate } = useEditorStore();

    let width = selectedTemplate?.src?.width;
    let height = selectedTemplate?.src?.height;


    const canvasRef = useRef(null);
    const editorRef = useRef(null);


    useEffect(() => {
        if (!canvasRef.current || !width || !height) return

        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
            width,
            height,
        })

        editorRef.current = fabricCanvas;

        return () => fabricCanvas.dispose();
    }, [width, height])



    return (
        <div className='bg-gray-500'>
            <canvas className="bg-white" ref={canvasRef} />
        </div>
    );
};

export default CardEditor;
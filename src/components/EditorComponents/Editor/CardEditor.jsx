import { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { Button } from "@/components/ui/button";

const CardEditor = () => {
    const canvasRef = useRef(null);
    const addText = () => {
        const text = new fabric.Textbox("Hello Canva!", {
            left: 100,
            top: 100,
            fontSize: 28,
            fill: "#000",
        });

        window.canvas.add(text);
    };


    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: 500,
            height: 600,
            backgroundColor: "#fff",
        });

        // Save reference globally (optional for now)
        window.canvas = canvas;

        return () => canvas.dispose();
    }, []);

    return (
        <div className="aspect-3/4 flex justify-center flex-col">
            <div
                className="border border-gray-400 max-h-max"
            >
                <canvas ref={canvasRef} />
            </div>
            <Button onClick={addText}>Add text</Button>
        </div>
    );
};


export default CardEditor;
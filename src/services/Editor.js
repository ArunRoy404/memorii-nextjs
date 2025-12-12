import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';
import { toast } from 'sonner';


export const addText = ({ text, fontFamily, fontSize, color, ref }) => {
    if (!ref) return;

    const textObj = new fabric.IText(text || 'Edit Text', {
        left: 60,
        top: 60,
        fontFamily: fontFamily || 'Arial',

        fontSize: fontSize || 16,
        fontWeight: 'bold',
        fill: color || '#000000',
        editable: true,
    })

    applyCommonStyles(textObj)

    ref.add(textObj)
    ref.setActiveObject(textObj);
    ref.renderAll();
}




export const addSticker = ({ svgURL, editorRef }) => {
    fetch(svgURL)
        .then(res => res.text())
        .then(svgText => {
            const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            const img = new Image();
            img.onload = () => {
                const fabricImg = new fabric.Image(img, {
                    left: 50,
                    top: 50,

                });
                applyCommonStyles(fabricImg)
                editorRef.setActiveObject(fabricImg);
                editorRef.add(fabricImg);
                editorRef.renderAll();
                URL.revokeObjectURL(url);
            };
            img.src = url;
        })
        .catch(() => toast.error("Error loading Sticker"));
};

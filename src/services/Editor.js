import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';
import { toast } from 'sonner';


export const addText = ({ position, text, fontFamily, fontSize, color, ref, fontWeight }) => {
    if (!ref) return;

    // Get canvas width and height
    const canvasWidth = ref.getWidth();
    const canvasHeight = ref.getHeight();
    const zoom = ref.getZoom()



    const textObj = new fabric.IText(text || 'Edit Text', {
        left: 60,
        top: 60,
        fontFamily: fontFamily || 'Arial',

        fontSize: fontSize || Math.round(26 / zoom),
        fontWeight: fontWeight || 'bold',
        fill: color || '#000000',
        editable: true,
    })



    if (position === 'top') {
        textObj.set({
            paintFirst: 'fill',
            strokeUniform: true,
            objectCaching: false,
            left: canvasWidth / (2 * zoom),
            top: canvasHeight / (7 * zoom),
            originX: 'center',
            originY: 'center',
        });
    }
    if (position === 'center') {
        textObj.set({
            paintFirst: 'fill',
            strokeUniform: true,
            objectCaching: false,
            left: canvasWidth / (2 * zoom),
            top: canvasHeight / (2 * zoom),
            originX: 'center',
            originY: 'center',

            // editable: false,      // can't edit text
            // selectable: false,    // can't select
            // evented: false,       // no mouse events
        });
    }
    if (position === 'bottom') {
        textObj.set({
            paintFirst: 'fill',
            strokeUniform: true,
            objectCaching: false,
            left: canvasWidth / (2 * zoom),
            top: (canvasHeight / (3 * zoom)) * 2.5,
            originX: 'center',
            originY: 'center',
        });
    }

    applyCommonStyles(textObj)

    ref.add(textObj)
    ref.setActiveObject(textObj);
    ref.renderAll();
}




export const addSticker = async ({ svgURL, editorRef }) => {
    try {
        const img = await fabric.Image.fromURL(svgURL, {
            crossOrigin: 'anonymous'
        });


        img.set({
            left: 50,
            top: 50,
        });

        if (typeof applyCommonStyles === "function") {
            applyCommonStyles(img);
        }

        editorRef.add(img);
        editorRef.setActiveObject(img);
        editorRef.renderAll();

    } catch (error) {
        console.error(error);
        toast.error("Error loading Sticker");
    }
};



export const handleDeleteObject = ({ e, ref }) => {
    if (e.key == 'Delete') {
        const activeObjects = ref.getActiveObjects();
        if (activeObjects.length) {
            activeObjects.forEach((obj) => ref.remove(obj));
            ref.discardActiveObject();
            ref.requestRenderAll();
        }
    }
}

export const handleRemoveText = ({ e, ref }) => {
    if (e.key === 'Backspace') {
        const activeObject = ref.getActiveObject();

        if (activeObject && activeObject.type === 'i-text' || activeObject.type === 'textbox') {
            activeObject.set('text', '')
            activeObject.enterEditing()
            activeObject.hiddenTextarea.focus()
            ref.requestRenderAll()
        }

    }
}


export const doubleClickToText = ({ ref }) => {
    ref.on('mouse:dblclick', (options) => {
        if (options.target) return;

        const pointer = ref.getPointer(options.e);

        const newText = new fabric.IText('', {
            left: pointer.x,
            top: pointer.y,
            fontFamily: 'Arial',
            fontSize: 26,
            fontWeight: 'bold',
            fill: '#000000',
            editable: true,
            objectCaching: false
        });

        applyCommonStyles(newText);

        ref.add(newText);
        ref.setActiveObject(newText);

        newText.enterEditing();
        newText.hiddenTextarea?.focus();

        ref.requestRenderAll();
    });
}

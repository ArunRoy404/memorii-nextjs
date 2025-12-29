import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';
import { toast } from 'sonner';
import jsPDF from 'jspdf';


export const addText = ({ position, text, fontFamily, fontSize, color, ref, fontWeight }) => {
    if (!ref) return;

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



export const addTextBox = ({ position, text, fontFamily, fontSize, color, ref, fontWeight }) => {
    if (!ref) return;

    const canvasWidth = ref.getWidth();
    const canvasHeight = ref.getHeight();
    const zoom = ref.getZoom()



    const texBoxObj = new fabric.Textbox(text || 'Edit Text', {
        left: 60,
        top: 60,

        width: 250,
        height: 150,

        fontFamily: fontFamily || 'Arial',
        fontSize: fontSize || Math.round(26 / zoom),
        fontWeight: fontWeight || 'bold',

        fill: color || '#000000',
        breakWords: true,
        editable: true,
    })



    if (position === 'top') {
        texBoxObj.set({
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
        texBoxObj.set({
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
        texBoxObj.set({
            paintFirst: 'fill',
            strokeUniform: true,
            objectCaching: false,
            left: canvasWidth / (2 * zoom),
            top: (canvasHeight / (3 * zoom)) * 2.5,
            originX: 'center',
            originY: 'center',
        });
    }

    applyCommonStyles(texBoxObj)

    ref.add(texBoxObj)
    ref.setActiveObject(texBoxObj);
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
            fontSize: 48,
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


export const touchToText = ({ ref }) => {
    // Move this outside or ensure it persists across calls
    let lastTapTime = 0;
    const doubleTapDelay = 300;

    ref.on('mouse:down', (options) => {
        // Fabric.js normalizes 'mouse:down' to include 'touchstart'
        const currentTapTime = new Date().getTime();
        const timeDiff = currentTapTime - lastTapTime;

        if (timeDiff < doubleTapDelay && timeDiff > 0) {
            // Prevent mobile browser defaults (zoom/scroll)
            if (options.e) {
                options.e.preventDefault();
                options.e.stopPropagation();
            }

            const pointer = ref.getPointer(options.e);

            const newText = new fabric.IText('', {
                left: pointer.x,
                top: pointer.y,
                fontFamily: 'Arial',
                fontSize: 48,
                fontWeight: 'bold',
                fill: '#000000',
                originX: 'center', // Helps positioning on small screens
                originY: 'center',
                objectCaching: false
            });

            if (typeof applyCommonStyles === 'function') {
                applyCommonStyles(newText);
            }

            ref.add(newText);
            ref.setActiveObject(newText);

            // Critical for Mobile: Enter editing first
            newText.enterEditing();

            // Use a slight timeout if the keyboard fails to appear
            setTimeout(() => {
                newText.hiddenTextarea?.focus();
            }, 50);

            ref.requestRenderAll();

            // Reset tap time so a 3rd tap doesn't trigger another text immediately
            lastTapTime = 0;
        } else {
            lastTapTime = currentTapTime;
        }
    });
};



export const handleDownloadPDF = (images = [], fileName = "test.pdf") => {
    toast.success("Downloading PDF...");

    if (images.length === 0) return;

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();


    const addImageToPDF = (imageDataUrl, isFirstPage = false) => {
        return new Promise((resolve) => {

            const img = new Image()
            img.src = imageDataUrl

            img.onload = () => {
                const imgWidth = img.width
                const imgHeight = img.height

                const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight)
                const width = imgWidth * ratio
                const height = imgHeight * ratio
                const x = (pageWidth - width) / 2
                const y = (pageHeight - height) / 2

                if (!isFirstPage) pdf.addPage()
                pdf.addImage(imageDataUrl, "PNG", x, y, width, height)
                resolve()

            }
        })
    }


    (async () => {
        for (let i = 0; i < images.length; i++) {
            await addImageToPDF(images[i], i === 0)
        }
        pdf.save(fileName)
    })();
}
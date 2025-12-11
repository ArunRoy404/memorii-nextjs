import * as fabric from 'fabric'


export const addText = ({ text, fontFamily, ref }) => {
    console.log('text', text);

    if (!ref) return;

    const textObj = new fabric.IText(text || 'Edit Text', {
        left: 100,
        top: 100,
        fontFamily: fontFamily || 'Arial',

        fontSize: 16,
        fontWeight: 'bold',
        fill: '#000',
        editable: true,
    })

    ref.add(textObj)
    ref.setActiveObject(textObj);
    ref.renderAll();

}
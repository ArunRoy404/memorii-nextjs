import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';


export const addText = ({ text, fontFamily, ref }) => {
    if (!ref) return;

    const textObj = new fabric.IText(text || 'Edit Text', {
        left: 60,
        top: 60,
        fontFamily: fontFamily || 'Arial',

        fontSize: 16,
        fontWeight: 'bold',
        fill: '#000',
        editable: true,
    })

    applyCommonStyles(textObj)

    ref.add(textObj)
    ref.setActiveObject(textObj);
    ref.renderAll();
}
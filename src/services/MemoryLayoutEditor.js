import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';

export const addMemoryLayoutVertical = ({ text, fontFamily, fontSize, color, ref, fontWeight }) => {
    if (!ref) return;

    const canvasWidth = ref.getWidth();
    const canvasHeight = ref.getHeight();
    const zoom = ref.getZoom() || 1;

    // --- Configuration ---
    const horizontalPadding = 40; // Total padding (left + right)
    const verticalMargin = 40;    // Margin at the very top and very bottom
    const gapBetweenBoxes = 20;   // The "eye-pleasing" gap
    const numBoxes = 4;

    // --- Calculations ---
    // Adjust dimensions based on zoom to maintain visual size
    const availableWidth = (canvasWidth / zoom) - horizontalPadding;
    const totalGapsHeight = gapBetweenBoxes * (numBoxes - 1);
    const availableHeight = (canvasHeight / zoom) - (verticalMargin * 2) - totalGapsHeight;

    const boxWidth = availableWidth;
    const boxHeight = availableHeight / numBoxes;

    // Array to hold our box configurations
    const boxes = [];

    for (let i = 0; i < numBoxes; i++) {
        // Calculate top position: 
        // Start Margin + (Index * BoxHeight) + (Index * Gap)
        const topPos = verticalMargin + (i * boxHeight) + (i * gapBetweenBoxes);

        const textBox = new fabric.Textbox(text || `Memory Slot ${i + 1}`, {
            left: (canvasWidth / zoom) / 2, // Center horizontally
            top: topPos,
            width: boxWidth,
            height: boxHeight, // Fixed height

            // Visual Properties
            fontFamily: fontFamily || 'Arial',
            fontSize: fontSize || Math.round(22 / zoom),
            fontWeight: fontWeight || 'normal',
            fill: color || '#333333',
            textAlign: 'center',
            originX: 'center',
            originY: 'top',

            // Constraints
            splitByGrapheme: true,
            breakWords: true,
            lockScalingX: true, // Lock width
            lockScalingY: true, // Lock height
            objectCaching: false,
        });

        // Apply your shared styles
        applyCommonStyles(textBox);

        ref.add(textBox);
        boxes.push(textBox);
    }

    // Optional: Select the first box by default
    if (boxes.length > 0) {
        ref.setActiveObject(boxes[0]);
    }

    ref.renderAll();
}
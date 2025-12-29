import * as fabric from 'fabric'
import { applyCommonStyles } from './CommonControlStyle';

export const addMemoryLayoutVertical = ({ fontFamily, fontSize, color, ref, fontWeight }) => {
    if (!ref) return;

    const canvasWidth = ref.getWidth();
    const canvasHeight = ref.getHeight();
    const zoom = ref.getZoom() || 1;

    // --- Layout Configuration ---
    const horizontalPadding = 100; // Large side padding
    const verticalMargin = 60;
    const gapBetweenPairs = 40;   // Space between Question 1 and Question 2
    const internalGap = 4;        // TIGHT GAP between Question and its Answer
    const numPairs = 4;

    const questions = [
        "1. How you know me?",
        "2. What is your favorite memory of us?",
        "3. Describe me in one word.",
        "4. What should we do next?"
    ];

    // --- Math Calculations ---
    const availableWidth = (canvasWidth / zoom) - horizontalPadding;
    const totalGapsHeight = gapBetweenPairs * (numPairs - 1);
    // Calculate how much height one "Block" (Q + A + Internal Gap) can take
    const blockHeight = ((canvasHeight / zoom) - (verticalMargin * 2) - totalGapsHeight) / numPairs;

    // Split the block height: Question gets ~30%, Answer gets ~70%
    const qHeight = blockHeight * 0.3;
    const aHeight = blockHeight * 0.7 - internalGap;

    for (let i = 0; i < numPairs; i++) {
        const blockTop = verticalMargin + (i * (blockHeight + gapBetweenPairs));

        // 1. Question Textbox (Non-interactive)
        const questionBox = new fabric.Textbox(questions[i], {
            left: (canvasWidth / zoom) / 2,
            top: blockTop,
            width: availableWidth,
            height: qHeight,

            fontFamily: fontFamily || 'Arial',
            fontSize: fontSize || Math.round(20 / zoom),
            fontWeight: 'bold',
            fill: color || '#000000',
            textAlign: 'left',
            originX: 'center',
            originY: 'top',

            editable: false,
            selectable: false,
            evented: false,
        });

        // 2. Answer Textbox (Strict Height)
        const answerBox = new fabric.Textbox('Write your answers here...', {
            left: (canvasWidth / zoom) / 2,
            top: blockTop + qHeight + internalGap - 30, // Positioned right under question
            width: availableWidth,
            height: aHeight, // FIXED HEIGHT

            fontFamily: fontFamily || 'Arial',
            fontSize: Math.round((20) * 0.85 / zoom),
            fontWeight: 'normal',
            fill: '#555555',
            textAlign: 'left',
            originX: 'center',
            originY: 'top',

            // Strict constraints to prevent overlapping other questions
            editable: true,
            selectable: true,
            hasControls: false,
            lockScalingX: true,
            lockScalingY: true,
            lockMovementX: true,
            lockMovementY: true,

            // This ensures text wraps within the box width
            splitByGrapheme: true,
            objectCaching: false,
        });

        applyCommonStyles(questionBox);
        applyCommonStyles(answerBox);

        ref.add(questionBox);
        ref.add(answerBox);
    }

    ref.renderAll();
}
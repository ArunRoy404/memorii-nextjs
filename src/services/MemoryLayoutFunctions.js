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
            fontSize: Math.round((fontSize || 20) * 0.85 / zoom),
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








export const addMemoryLayoutGrid = ({ fontFamily, fontSize, color, ref }) => {
    if (!ref) return;

    const canvasWidth = ref.getWidth();
    const canvasHeight = ref.getHeight();
    const zoom = ref.getZoom() || 1;

    // --- Configuration ---
    const padding = 60;          // Outer canvas padding
    const horizontalGap = 30;    // Gap between left and right columns
    const verticalGap = 40;      // Gap between top and bottom rows
    const internalGap = 4;       // Gap between Question and Answer
    const numBoxes = 4;

    const questions = [
        "1. How you know me?",
        "2. Favorite memory?",
        "3. Describe me?",
        "4. What's next?"
    ];

    // --- Grid Calculations ---
    const totalAvailableWidth = (canvasWidth / zoom) - (padding * 2);
    const totalAvailableHeight = (canvasHeight / zoom) - (padding * 2);

    // Calculate dimensions for a single "Cell" in the 2x2 grid
    const cellWidth = (totalAvailableWidth - horizontalGap) / 2;
    const cellHeight = (totalAvailableHeight - verticalGap) / 2;

    // Split cell height between Question (30%) and Answer (70%)
    const qHeight = cellHeight * 0.3;
    const aHeight = cellHeight * 0.7 - internalGap;

    for (let i = 0; i < numBoxes; i++) {
        // Determine column (0 or 1) and row (0 or 1)
        const col = i % 2;
        const row = Math.floor(i / 2);

        // Calculate X and Y coordinates
        const leftPos = padding + (col * (cellWidth + horizontalGap));
        const topPos = padding + (row * (cellHeight + verticalGap));

        // 1. Question Textbox (Grid Mode)
        const questionBox = new fabric.Textbox(questions[i], {
            left: leftPos,
            top: topPos,
            width: cellWidth,
            height: qHeight,

            fontFamily: fontFamily || 'Arial',
            fontSize: fontSize || Math.round(20 / zoom),
            fontWeight: 'bold',
            fill: color || '#000000',
            textAlign: 'left',
            originX: 'left',
            originY: 'top',

            editable: false,
            selectable: false,
            evented: false,
        });

        // 2. Answer Textbox (Grid Mode)
        const answerBox = new fabric.Textbox('Write answer here...', {
            left: leftPos,
            top: topPos + qHeight + internalGap - 100,
            width: cellWidth,
            height: aHeight,

            fontFamily: fontFamily || 'Arial',
            fontSize: Math.round((fontSize || 20) * 0.85 / zoom),
            fontWeight: 'normal',
            fill: '#555555',
            textAlign: 'left',
            originX: 'left',
            originY: 'top',

            // Constraints
            editable: true,
            selectable: true,
            hasControls: false,
            lockScalingX: true,
            lockScalingY: true,
            lockMovementX: true,
            lockMovementY: true,
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
'use client';

import * as fabric from 'fabric';

if (!fabric.Object.prototype.__customPropsPatched) {
    fabric.Object.prototype.__customPropsPatched = true;

    const originalToObject = fabric.Object.prototype.toObject;

    fabric.Object.prototype.toObject = function (propertiesToInclude) {
        return {
            ...originalToObject.call(this, propertiesToInclude),

            lockInteraction: this.lockInteraction,
            preAddedText: this.preAddedText,
            lastPreAddedText: this.lastPreAddedText,
            isMemoryQuestion: this.isMemoryQuestion,
            isMemoryAnswer: this.isMemoryAnswer,
        };
    };
}

export { fabric };

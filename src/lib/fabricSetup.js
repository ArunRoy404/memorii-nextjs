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
            isMemoryImageUpload: this.isMemoryImageUpload,
            isMemoryQuestion: this.isMemoryQuestion,
            isMemoryAnswer: this.isMemoryAnswer,
            name: this.name,
            id: this.id,
        };
    };
}

export { fabric };

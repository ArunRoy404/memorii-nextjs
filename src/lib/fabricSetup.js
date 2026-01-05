'use client';

import * as fabric from 'fabric';

if (!fabric.Object.prototype.__lockInteractionPatched) {
    fabric.Object.prototype.__lockInteractionPatched = true;

    const originalToObject = fabric.Object.prototype.toObject;

    fabric.Object.prototype.toObject = function (propertiesToInclude) {
        return {
            ...originalToObject.call(this, propertiesToInclude),
            lockInteraction: this.lockInteraction,
        };
    };
}

export { fabric }; // 👈 IMPORTANT

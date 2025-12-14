import CardPreview from "@/shared/Editor/CardPreview";
import React from "react";


export const BookPage = React.forwardRef(({ index }, ref) => (
    <div ref={ref}>
        <CardPreview index={index} />
    </div>
));
BookPage.displayName = "BookPage";

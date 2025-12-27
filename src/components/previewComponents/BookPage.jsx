import React from "react";
import RenderBookPage from "./RenderBookPage";


export const BookPage = React.forwardRef(({ page, width, height, index }, ref) => (
    <div ref={ref}>
        <RenderBookPage
            index={index}
            width={width}
            height={height}
            page={page}
        />
    </div>
));
BookPage.displayName = "BookPage";

import React from "react";
import RenderBookPage from "./RenderBookPage";


export const BookPage = React.forwardRef(({ page, width, height }, ref) => (
    <div ref={ref}>
        <RenderBookPage
            width={width}
            height={height}
            page={page}
        />
    </div>
));
BookPage.displayName = "BookPage";

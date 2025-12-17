import React from "react";
import RenderBookPage from "./RenderBookPage";


export const BookPage = React.forwardRef(({ page }, ref) => (
    <div ref={ref}>
        <RenderBookPage
            page={page}
        />
    </div>
));
BookPage.displayName = "BookPage";

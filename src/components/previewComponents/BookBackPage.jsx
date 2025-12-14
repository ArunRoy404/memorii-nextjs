import React from 'react';
import CardBackPage from '../common/CardBackPage/CardBackPage';

export const BookBackPage = React.forwardRef((props, ref) => (
    <div ref={ref} {...props} >
        <CardBackPage />
    </div>
));
BookBackPage.displayName = "BackCover";


import Navbar from '@/shared/public/navbar/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
};

export default PublicLayout;